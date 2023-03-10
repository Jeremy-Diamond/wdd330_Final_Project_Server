const express = require("express");
const cors = require('cors');


const app = express();
app.use(cors());

// Define an array of data objects with ids
const data = [
  {id:1,
    
      quote: {
        lineItemGroups: [
          {
            delveryAddress: {
              zipCode: 84115,
              state: "UT",
              city: "South Salt Lake",
              street: "3244 S 300 W",
            },
            subtotal: 17318.7,
            order: 1,
            name: "Group1",
            id: "a0p4U00000FC5xnQAD",
          },
          {
            deliveryAddress: {
              zipCode: "69696",
              state: "UT",
              city: "South Salt Lake",
              street: "3244 South 300 West",
            },
            subtotal: 0,
            order: 2,
            name: "Payoffs and Pickup Equipment",
            id: "a0p4U00000FC8CEQA1",
          },
        ],
        lineItems: [
          {
            declinedQuantity: null,
            isRejected: false,
            locationRemarks: null,
            optionType: null,
            rollChildQtyToParent: false,
            showOnQuote: true,
            additionalDiscount: 0,
            totalProvidedCopies: 0,
            monthlyVolume: null,
            perPageOverageRate: null,
            selectedPerPageRate: 0,
            customPerPageRate: null,
            productCode: "BP-50C31",
            productServiceType: null,
            isServiceProduct: false,
            leasePrice: 229.46,
            salesPrice: 9890.55,
            listPrice: 3296.85,
            order: 1,
            lineDetail: "Lease Rate Used: .0232",
            lineDetailForGP: "Lease Rate Used: .0232",
            description:
              "31 pages-per-minute Color Sharp Multi-function System",
            hidden: false,
            name: "BP-50C31 - Sharp Color Copier #",
            picture: null,
            quantity: 3,
            parentId: null,
            groupId: "a0p4U00000FC5xnQAD",
            id: "a0q4U00000PozQnQAJ",
          },
          {
            declinedQuantity: null,
            isRejected: false,
            locationRemarks: null,
            optionType: "Component",
            rollChildQtyToParent: false,
            showOnQuote: true,
            additionalDiscount: 0,
            totalProvidedCopies: 0,
            monthlyVolume: null,
            perPageOverageRate: null,
            selectedPerPageRate: 0,
            customPerPageRate: null,
            productCode: "BP-DE12",
            productServiceType: null,
            isServiceProduct: false,
            leasePrice: 35.97,
            salesPrice: 1550.25,
            listPrice: 516.75,
            order: 2,
            lineDetail: "Lease Rate Used: .0232",
            lineDetailForGP: "Lease Rate Used: .0232",
            description: "Stand/1 X 500 Paper Feed Desk Unit",
            hidden: false,
            name: "BP-DE12 - Stand/1 X 550 Paper Deck (50C26-70M65)#",
            picture: null,
            quantity: 3,
            parentId: "a0q4U00000PozQnQAJ",
            groupId: "a0p4U00000FC5xnQAD",
            id: "a0q4U00000PozQoQAJ",
          },
          {
            declinedQuantity: null,
            isRejected: false,
            locationRemarks: null,
            optionType: "Component",
            rollChildQtyToParent: false,
            showOnQuote: true,
            additionalDiscount: 0,
            totalProvidedCopies: 0,
            monthlyVolume: null,
            perPageOverageRate: null,
            selectedPerPageRate: 0,
            customPerPageRate: null,
            productCode: "BP-FN11",
            productServiceType: null,
            isServiceProduct: false,
            leasePrice: 81.52,
            salesPrice: 3513.9,
            listPrice: 1171.3,
            order: 3,
            lineDetail: "Lease Rate Used: .0232",
            lineDetailForGP: "Lease Rate Used: .0232",
            description: "Sharp Finisher (50C26-70C45) #",
            hidden: false,
            name: "BP-FN11 - Finisher (50C26-70M55) #",
            picture: null,
            quantity: 3,
            parentId: "a0q4U00000PozQnQAJ",
            groupId: "a0p4U00000FC5xnQAD",
            id: "a0q4U00000PozQpQAJ",
          },
          {
            declinedQuantity: null,
            isRejected: false,
            locationRemarks: null,
            optionType: "Component",
            rollChildQtyToParent: false,
            showOnQuote: false,
            additionalDiscount: 0,
            totalProvidedCopies: 0,
            monthlyVolume: null,
            perPageOverageRate: null,
            selectedPerPageRate: 0,
            customPerPageRate: null,
            productCode: "Sharp 90 Day Warranty",
            productServiceType: "Warranty",
            isServiceProduct: false,
            leasePrice: 0,
            salesPrice: 0,
            listPrice: 0,
            order: 4,
            lineDetail:
              "CPP: 0 (Retail)<br>Overage Rate 0<br>Pages: 0<br>Lease Rate Used: .0232<br>",
            lineDetailForGP: "CPP: 0 (Retail) Pages: 0 Lease Rate Used: .0232",
            description: "Sharp Manufacturer Warranty",
            hidden: false,
            name: "Sharp 90 Day Warranty",
            picture: null,
            quantity: 3,
            parentId: "a0q4U00000PozQnQAJ",
            groupId: "a0p4U00000FC5xnQAD",
            id: "a0q4U00000PozQqQAJ",
          },
          {
            declinedQuantity: null,
            isRejected: false,
            locationRemarks: null,
            optionType: "Component",
            rollChildQtyToParent: false,
            showOnQuote: true,
            additionalDiscount: 0,
            totalProvidedCopies: 0,
            monthlyVolume: null,
            perPageOverageRate: null,
            selectedPerPageRate: 0,
            customPerPageRate: null,
            productCode: "Atlas/Titan Startup Bundle NASPO",
            productServiceType: null,
            isServiceProduct: false,
            leasePrice: 33.48,
            salesPrice: 1443,
            listPrice: 481,
            order: 5,
            lineDetail: null,
            lineDetailForGP: null,
            description: "Atlas/Titan Startup Bundle NASPO",
            hidden: false,
            name: "Atlas/Titan Startup Bundle NASPO",
            picture: null,
            quantity: 3,
            parentId: "a0q4U00000PozQnQAJ",
            groupId: "a0p4U00000FC5xnQAD",
            id: "a0q4U00000PozQrQAJ",
            services: [],
            isLastWithParent: true,
          },
          {
            declinedQuantity: null,
            isRejected: false,
            locationRemarks: null,
            optionType: "Component",
            rollChildQtyToParent: false,
            showOnQuote: false,
            additionalDiscount: 0,
            totalProvidedCopies: 0,
            monthlyVolume: null,
            perPageOverageRate: null,
            selectedPerPageRate: 0,
            customPerPageRate: null,
            productCode: "BP-NT70BA",
            productServiceType: null,
            isServiceProduct: false,
            leasePrice: 0,
            salesPrice: 0,
            listPrice: 0,
            order: 6,
            lineDetail: null,
            lineDetailForGP: null,
            description: "Sharp Toner - Black",
            hidden: false,
            name: "Sharp Toner - Black",
            picture: null,
            quantity: 3,
            parentId: "a0q4U00000PozQrQAJ",
            groupId: "a0p4U00000FC5xnQAD",
            id: "a0q4U00000PozQsQAJ",
          },
          {
            declinedQuantity: null,
            isRejected: false,
            locationRemarks: null,
            optionType: "Component",
            rollChildQtyToParent: false,
            showOnQuote: false,
            additionalDiscount: 0,
            totalProvidedCopies: 0,
            monthlyVolume: null,
            perPageOverageRate: null,
            selectedPerPageRate: 0,
            customPerPageRate: null,
            productCode: "BP-NT70CA",
            productServiceType: null,
            isServiceProduct: false,
            leasePrice: 0,
            salesPrice: 0,
            listPrice: 0,
            order: 7,
            lineDetail: null,
            lineDetailForGP: null,
            description: "Sharp Toner - Cyan",
            hidden: false,
            name: "Sharp Toner - Cyan",
            picture: null,
            quantity: 3,
            parentId: "a0q4U00000PozQrQAJ",
            groupId: "a0p4U00000FC5xnQAD",
            id: "a0q4U00000PozQtQAJ",
          },
          {
            declinedQuantity: null,
            isRejected: false,
            locationRemarks: null,
            optionType: "Component",
            rollChildQtyToParent: false,
            showOnQuote: false,
            additionalDiscount: 0,
            totalProvidedCopies: 0,
            monthlyVolume: null,
            perPageOverageRate: null,
            selectedPerPageRate: 0,
            customPerPageRate: null,
            productCode: "BP-NT70MA",
            productServiceType: null,
            isServiceProduct: false,
            leasePrice: 0,
            salesPrice: 0,
            listPrice: 0,
            order: 8,
            lineDetail: null,
            lineDetailForGP: null,
            description: "Sharp Toner - Magenta",
            hidden: false,
            name: "Sharp Toner - Magenta",
            picture: null,
            quantity: 3,
            parentId: "a0q4U00000PozQrQAJ",
            groupId: "a0p4U00000FC5xnQAD",
            id: "a0q4U00000PozQuQAJ",
          },
          {
            declinedQuantity: null,
            isRejected: false,
            locationRemarks: null,
            optionType: "Component",
            rollChildQtyToParent: false,
            showOnQuote: false,
            additionalDiscount: 0,
            totalProvidedCopies: 0,
            monthlyVolume: null,
            perPageOverageRate: null,
            selectedPerPageRate: 0,
            customPerPageRate: null,
            productCode: "BP-NT70YA",
            productServiceType: null,
            isServiceProduct: false,
            leasePrice: 0,
            salesPrice: 0,
            listPrice: 0,
            order: 9,
            lineDetail: null,
            lineDetailForGP: null,
            description: "Sharp Toner - Yellow",
            hidden: false,
            name: "Sharp Toner - Yellow",
            picture: null,
            quantity: 3,
            parentId: "a0q4U00000PozQrQAJ",
            groupId: "a0p4U00000FC5xnQAD",
            id: "a0q4U00000PozQvQAJ",
          },
          {
            declinedQuantity: null,
            isRejected: false,
            locationRemarks: null,
            optionType: "Component",
            rollChildQtyToParent: false,
            showOnQuote: true,
            additionalDiscount: 0,
            totalProvidedCopies: 0,
            monthlyVolume: null,
            perPageOverageRate: null,
            selectedPerPageRate: 0,
            customPerPageRate: null,
            productCode: "SURGE-15",
            productServiceType: null,
            isServiceProduct: false,
            leasePrice: 8.14,
            salesPrice: 351,
            listPrice: 117,
            order: 10,
            lineDetail: null,
            lineDetailForGP: null,
            description: "15 Amp Surge Suppressor",
            hidden: false,
            name: "15 Amp Surge Suppressor",
            picture: null,
            quantity: 3,
            parentId: "a0q4U00000PozQrQAJ",
            groupId: "a0p4U00000FC5xnQAD",
            id: "a0q4U00000PozQwQAJ",
          },
          {
            declinedQuantity: null,
            isRejected: false,
            locationRemarks: null,
            optionType: "Component",
            rollChildQtyToParent: false,
            showOnQuote: true,
            additionalDiscount: 0,
            totalProvidedCopies: 0,
            monthlyVolume: null,
            perPageOverageRate: null,
            selectedPerPageRate: 0,
            customPerPageRate: null,
            productCode: "ITOM",
            productServiceType: null,
            isServiceProduct: false,
            leasePrice: 13.22,
            salesPrice: 570,
            listPrice: 95,
            order: 11,
            lineDetail: null,
            lineDetailForGP: null,
            description:
              "IT Open Market on-Site Network Installation (2 Hours)",
            hidden: false,
            name: "IT Open Market",
            picture: null,
            quantity: 6,
            parentId: "a0q4U00000PozQrQAJ",
            groupId: "a0p4U00000FC5xnQAD",
            id: "a0q4U00000PozQxQAJ",
          },
          {
            declinedQuantity: null,
            isRejected: false,
            locationRemarks: null,
            optionType: null,
            rollChildQtyToParent: false,
            showOnQuote: false,
            additionalDiscount: 0,
            totalProvidedCopies: 0,
            monthlyVolume: null,
            perPageOverageRate: null,
            selectedPerPageRate: 0,
            customPerPageRate: null,
            productCode: "Existing Equipment",
            productServiceType: null,
            isServiceProduct: false,
            leasePrice: 0,
            salesPrice: 0,
            listPrice: 0,
            order: 12,
            lineDetail: null,
            lineDetailForGP: null,
            description: "Existing Equipment",
            hidden: false,
            name: "Existing Equipment",
            picture: null,
            quantity: 1,
            parentId: null,
            groupId: "a0p4U00000FC8CEQA1",
            id: "a0q4U00000PozQyQAJ",
          },
          {
            declinedQuantity: null,
            isRejected: false,
            locationRemarks: null,
            optionType: null,
            rollChildQtyToParent: false,
            showOnQuote: false,
            additionalDiscount: 0,
            totalProvidedCopies: 0,
            monthlyVolume: null,
            perPageOverageRate: null,
            selectedPerPageRate: 0,
            customPerPageRate: null,
            productCode: "Existing Equipment",
            productServiceType: null,
            isServiceProduct: false,
            leasePrice: 0,
            salesPrice: 0,
            listPrice: 0,
            order: 13,
            lineDetail: null,
            lineDetailForGP: null,
            description: "Existing Equipment",
            hidden: false,
            name: "Existing Equipment",
            picture: null,
            quantity: 1,
            parentId: null,
            groupId: "a0p4U00000FC8CEQA1",
            id: "a0q4U00000PozQzQAJ",
          },
        ],
        documentLastViewed: "2023-03-07T22:16:35.385Z",
        documentViewCount: 8,
        customerNumber: "01-CHICKEN",
        opportunityName:
          "Ian Test for Flow-633988-633988-633988-633988-633988-633988-633988-633988-633988-633988",
        quoteExpirationDate: "2022-08-31",
        quoteNumber: "633988",
        primaryContact: {
          phone: "8014689532",
          email: null,
          name: "Ranger Rusty",
        },
        salesRep: {
          icon: null,
          jobTitle: "Salesforce Architect",
          phone: "(385) 271-3950",
          email: "idoney@lesolsoncompany.com",
          name: "Ian Doney",
          accountId: "001f400000LoPCUAA3",
          accountName: "Steve Foulgers Chickens",
        },
        soldTo: {
          country: "USA",
          zipCode: "69696",
          state: "UT",
          city: "South Salt Lake",
          street: "Steve Foulgers Chickens",
          name: "Steve Foulgers Chickens",
        },
        isLeaseAmendment: false,
        numSignatures: null,
        totalDiscount: 0,
        showTotalDiscount: true,
        coverPageNeeded: false,
        pricebookId: "01sf4000006lwLvAAI",
        pricebookName: "Z - K12",
        managedITAssessmentNeeded: true,
        showCashPaymentBreakdown: false,
        showLeasePaymentBreakdown: false,
        amendedLeaseTerms: null,
        leaseTerms: "60",
        serviceMinimum: 0,
        serviceBillingFrequency: null,
        showServiceCharges: false,
        equipmentLeaseCompany: "REVCO",
        serviceBillingOption: "Pass Through Lease",
        sourcewellContract: null,
        hpNaspoContractNumbers: null,
        sharpNaspoContractNumbers: null,
        leaseTime: "60",
        purchaseType: "REVCO",
        purchaseOption: "FMV",
        leaseTotal: 401.79,
        additionalNotes: null,
        multipliers:
          "Desktop Support: 0<br>Server Support: 0<br>Advanced Support: 0<br>After Hours Support: 0",
        poNumber: null,
        w9NotNeeded: false,
        quoteTotal: 17318.7,
        id: "a0u4U00000G6LkpQAF",
      
      },
 
  },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// Define a route that takes an ID parameter and looks up the corresponding data

app.get("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const result = data.find((d) => d.id === id);
  if (result) {
    res.send(result);
  } else {
    res.status(404).send("Data not found");
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
