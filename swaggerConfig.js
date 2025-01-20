const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BudgetKu API",
      version: "1.0.0",
      description: "API documentation for BudgetKu application",
    },
    servers: [
      {
        url: "https://server-uas.vercel.app/",
        description: "Development server",
        variables: {
          port: {
            default: "3000",
          },
        },
      },
    ],
  },
  apis: ["./routes/*.js"], // Path ke file route Anda
};

const specs = swaggerJsdoc(options);

module.exports = specs;
