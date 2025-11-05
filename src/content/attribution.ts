// Attribution Configuration for Open Source Template
// This ensures proper credit when the template is used by others

export interface Attribution {
    creator: {
        name: string;
        website: string;
        tagline: string;
    };
    template: {
        name: string;
        description: string;
        githubUrl: string;
    };
    message: string;
}

export const attribution: Attribution = {
    creator: {
        name: "Sunnat629 Labs",
        website: "https://sunnat629labs.com", // Replace with actual website
        tagline: "Innovation lab focused on empowering developers"
    },
    template: {
        name: "Community Event Template",
        description: "Professional event website template for tech communities",
        githubUrl: "https://github.com/sunnat629/community-event-template" // Replace with actual repo
    },
    message: "Made with ❤️ for tech communities worldwide"
};