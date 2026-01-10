interface Employment {
  company: string;
  position: string;
  description: string;
}

const employment: Array<Employment> = [
  {
    company: "Booking.com",
    position: "Senior Frontend Engineer",
    description: `Primarily focused on the development of the Booking.com Taxi Partner Portal. Using React, Nodejs and AWS CDK.\n\n
        I work on the Taxi Dispatch team where my main focus is on the Taxi Partner Portal. I work on the React frontend and the Node API that interacts with our backend services.\n\n
        I collaborate closely with product, UX and our backend engineers to go from design to live providing feedback and making adjustments along the way to get something in the hands of users that we can then iterate on. During my time, I’ve helped graduates get up to speed no matter their skill level and start contributing to the project at a decent level.\n`,
  },
  {
    company: "The Robert Street Hub",
    position: "Software Developer",
    description: `
        Working on fashion site ISAWITFIRST as part of a small team. Working in a high pressure environment getting features finished and tested. Using JS, Serverless and Shopify.\n
        At the The Robert Street Hub in a team of 4 - 5 developers, I worked on our e-commerce fashion site alongside other internal applications. The site was written in Liquid (Shopify templating language), Javascript, SCSS and NodeJS.\n
        I also worked on a Colour swatch tool that was deployed to Lambda and connected to a MongoDB database. It was able to take on the usual customer traffic as well as the surge over black friday.`,
  },
  {
    company: "ADXBA",
    position: "Software Developer",
    description: `I started my apprenticeship here in 2014. Here I was able to determine what languages I enjoyed working with and was a huge part in my decision to learn more about frontend technologies.\n
        My main responsibility was the development of various parts of our in-house system for monitoring PC’s around the UK (advertising displays at airports & shopping centres, car park signs etc.). I looked after the development of the mobile app built with Angular and Ionic alogn with the website and the majority of the API.\n
        It was at this point that I was exposed to my first frontend framework AngularJS (yes version 1) and I realised this was the type of work I enjoyed. I went on to learn Angular and Ionic whilst I was here.`,
  },
];

export default employment;
