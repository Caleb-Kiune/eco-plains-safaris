const fs = require('fs');
const path = require('path');

const SAFARIS_PATH = path.join(__dirname, '../public/data/safaris.json');

function getCountry(destination) {
    // Normalize for checking
    const dest = destination.toLowerCase();

    // Multi-country
    if (dest.includes('zimbabwe') && dest.includes('botswana')) {
        return "Botswana, Zimbabwe";
    }

    // Single country checks
    if (dest.includes('kenya') || dest.includes('nairobi') || dest.includes('diani') || dest.includes('tsavo') || dest.includes('nakuru') || dest.includes('machakos') || dest.includes('elementaita') || dest.includes('suswa')) {
        return "Kenya";
    }

    if (dest.includes('zimbabwe') || dest.includes('victoria falls') || dest.includes('hwange')) {
        return "Zimbabwe";
    }

    if (dest.includes('botswana') || dest.includes('chobe')) {
        return "Botswana";
    }

    if (dest.includes('tanzania') || dest.includes('zanzibar') || dest.includes('moshi')) {
        return "Tanzania";
    }

    if (dest.includes('rwanda')) {
        return "Rwanda";
    }

    if (dest.includes('uae') || dest.includes('dubai')) {
        return "United Arab Emirates";
    }

    if (dest.includes('thailand')) {
        return "Thailand";
    }

    return "Unknown";
}

function main() {
    console.log('Reading safaris.json...');
    const rawData = fs.readFileSync(SAFARIS_PATH, 'utf8');
    const data = JSON.parse(rawData);

    if (!data.tours || !Array.isArray(data.tours)) {
        console.error('Error: "tours" array not found in JSON');
        process.exit(1);
    }

    console.log(`Processing ${data.tours.length} tours...`);

    const updatedTours = data.tours.map(tour => {
        const country = getCountry(tour.destination);

        // Create new object with 'country' inserted after 'destination'
        const newTour = {};

        // Copy keys, inserting 'country' after 'destination'
        for (const key of Object.keys(tour)) {
            newTour[key] = tour[key];
            if (key === 'destination') {
                newTour['country'] = country;
            }
        }

        return newTour;
    });

    // Update data object
    data.tours = updatedTours;

    console.log('Writing updated safaris.json...');
    fs.writeFileSync(SAFARIS_PATH, JSON.stringify(data, null, 2), 'utf8');

    console.log('✅ Successfully added "country" field to all tours!');

    // Log a few examples for verification
    console.log('\nVerification Examples:');
    updatedTours.slice(0, 5).forEach(t => {
        console.log(`- ${t.destination} -> ${t.country}`);
    });
}

main();
