const adminDetails = require("./models/Admin/details.model.js");
const adminCredential = require("./models/Admin/credential.model.js");
const connectToMongo = require("./database/db.js");
const mongoose = require("mongoose");

const seedData = async () => {
    try {
        await connectToMongo();

        await adminCredential.deleteMany({})
        await adminDetails.deleteMany({})

        await adminCredential.create({
            loginid: 111,
            password: "123123"
        });

        const adminDetail = {
            employeeId: "111",
            firstName: "JNTUA",
            middleName: "",
            lastName: "-",
            email: "principal.cea@jntua.ac.in",
            phoneNumber: "08554273013",
            gender: "-",
            type: "Admin",
            profile: "jntua_logo.png",
        };

        await adminDetails.create(adminDetail);

        console.log("Seeding completed successfully!");
    } catch (error) {
        console.error("Error while seeding:", error);
    } finally {
        await mongoose.connection.close();
        process.exit();
    }
};

seedData();
