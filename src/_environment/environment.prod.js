export const domainInfo = {
    domain: 'localhost',
    port: '3030'
};

export const domainPort = domainInfo.domain + ':' + domainInfo.port;

export const environment = {
    production: true,
    domainPort: domainPort,
    apiUrl: 'http://' + domainPort
};

