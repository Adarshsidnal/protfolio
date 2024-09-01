import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Pathfinder Pro',
        description: "Me and my friend built an  an interactive web application using JavaScript, and HTML/CSS to visualize pathfinding algorithms, enhancing user understanding of their mechanics.",
        tools: ['HTML', 'CSS', 'JavaScript','GitHub'],
        role: 'JavaScript Developer',
        code: 'https://github.com/Adarshsidnal/PathfindingAlgorithmsSimulator',
        demo: 'https://adarshsidnal.github.io/PathfindingAlgorithmsSimulator/',
        image: crefin,
    },
    {
        id: 2,
        name: 'Soberity Period Prediction',
        description:'I and my team have developed a Web Application for Deaddicition Center of SDM which automated the data collection of the deaddiction centre and management of the patient’s information and integrated ML models to predict their sobriety period, AII and Risk Level helping the counsellor to prepare a treatment plan  ',
        tools: ['Machine Learning','React Js','Node Js','MongoDB'],
        role: 'Data Scientist and Full stack Developer',
        code: 'https://github.com/Adarshsidnal/SoberityPeriodPerdiction',
        demo: 'https://sdp-client-cy7h.vercel.app/',
        image: travel,
    },
    {
        id: 3,
        name: ' VitaLink Self-care App',
        description: 'My team built an Android App with implemented features such as chatbots, push notifications, and optical aids to empower users in managing their health and enabled daily goal tracking, leading to improved adherence to healthy routines and enhanced user engagement',
        tools: ['Java','Maven','firebase','XML','Google Cloud','MapBox SDK'],
        code: 'https://github.com/Adarshsidnal/VitaLink-A-self-care-App',
        role: 'Full Stack Developer',
        demo: 'https://sites.google.com/view/vitalinkadarsh/home',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Decentralized ABAC Access Control Mechanism with an Improved Consensus Algorithm on Hyperledger Fabric',
        description: "My team and I developed a decentralized Attribute-Based Access Control (ABAC) framework that leverages blockchain technology to enhance the security and efficiency of access control mechanisms in cloud environments. By optimizing the Raft consensus algorithm, the proposed solution addresses common challenges such as transaction delays and reliance on trusted centers, ensuring faster and more secure cloud services",
        tools: ['kubernetes','Typescript','JavaScript','Openstack','Docker','Blockchain','Hyperledger Fabric','HTML/CSS'],
        code: 'https://github.com/Adarshsidnal/AccessControl',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },