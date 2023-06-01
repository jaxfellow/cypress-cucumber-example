export function getWebsite(name) {

    const websites = {
        Github: 'https://github.com/',
        Google: 'https://www.google.com/',
        Facebook: 'https://www.facebook.com/',
        Amazon: 'https://www.amazon.com/',
        Netflix: 'https://www.netflix.com/de-en/',
        Wikipedia: 'https://www.wikipedia.org/',
        YouTube: 'https://www.youtube.com/',
        LinkedIn: 'https://www.linkedin.com/',
        Twitter: 'https://twitter.com/'
    };

    return websites[name];
}