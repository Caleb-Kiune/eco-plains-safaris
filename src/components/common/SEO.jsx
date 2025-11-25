import React, { useEffect } from 'react';

/**
 * SEO Component to manage document head tags compatible with React 19.
 * Replaces react-helmet-async.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements (title, meta, link)
 */
const SEO = ({ children }) => {
    useEffect(() => {
        // Parse children to extract title and meta tags
        const childrenArray = React.Children.toArray(children);

        childrenArray.forEach(child => {
            if (!React.isValidElement(child)) return;

            const { type, props } = child;

            if (type === 'title') {
                // Handle <title>
                if (props.children) {
                    document.title = props.children;
                }
            } else if (type === 'meta') {
                // Handle <meta>
                // Find existing meta tag or create new one
                let metaTag = null;

                if (props.name) {
                    metaTag = document.querySelector(`meta[name="${props.name}"]`);
                } else if (props.property) {
                    metaTag = document.querySelector(`meta[property="${props.property}"]`);
                }

                if (!metaTag) {
                    metaTag = document.createElement('meta');
                    if (props.name) metaTag.setAttribute('name', props.name);
                    if (props.property) metaTag.setAttribute('property', props.property);
                    document.head.appendChild(metaTag);
                }

                if (props.content) {
                    metaTag.setAttribute('content', props.content);
                }
            } else if (type === 'link') {
                // Handle <link> (e.g. canonical)
                let linkTag = document.querySelector(`link[rel="${props.rel}"]`);
                if (props.href) {
                    if (!linkTag) {
                        linkTag = document.createElement('link');
                        linkTag.setAttribute('rel', props.rel);
                        document.head.appendChild(linkTag);
                    }
                    linkTag.setAttribute('href', props.href);
                }
            }
        });

        // Cleanup function (optional, but good practice if we were mounting/unmounting rapidly)
        // For SEO tags, we usually want them to persist until the next page changes them.
        // React 19 might handle this natively in the future, but for now this manual DOM manipulation works.
    }, [children]);

    return null;
};

export default SEO;
