export const environment = {
    production: false,
    appServerUrl: 'https://api.opticiandynamics.com',
    firebase: {
        apiKey: "AIzaSyACDPtkxuswVNlZdX9ubkoxA3JyKOOB6Tg",
        authDomain: "cargo-guard.firebaseapp.com",
        projectId: "cargo-guard",
        storageBucket: "cargo-guard.appspot.com",
        messagingSenderId: "127959052543",
        appId: "1:127959052543:web:27d02d5718a0cccb7edcca",
        measurementId: "G-2CN6XPHLHK"
    },
    moduleHost: new Map([
    // ["SECURITY_DOMAIN_URI", "http://localhost:8889"],
    // ["SHIELD_DOMAIN_URI", "http://localhost:8889"],

      ["SECURITY_DOMAIN_URI", "https://cargo-guard.mfsys.ca"],
     ["SHIELD_DOMAIN_URI", "https://cargo-guard.mfsys.ca"]

    //  ["SECURITY_DOMAIN_URI", "https://aws.cargo.mfsys.ca"],
    // ["SHIELD_DOMAIN_URI", "https://aws.cargo.mfsys.ca"]
    ])

}