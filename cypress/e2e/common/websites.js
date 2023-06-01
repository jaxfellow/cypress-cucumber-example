export function getWebsite (name) {

    const github = 'https://github.com/'
    const google = 'https://www.google.com/'
    const facebook = 'https://www.facebook.com/'

    switch (name) {
        case 'Github':
            return github;
        case 'Google':
            return google;
        case 'Facebook':
            return facebook;
        default:
            throw new Error(`Unknown website: ${name}`);
    }
}