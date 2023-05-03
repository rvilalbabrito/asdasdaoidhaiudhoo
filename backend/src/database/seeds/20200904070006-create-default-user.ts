import { QueryInterface } from "sequelize";
import { hash } from "bcryptjs";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.sequelize.transaction(async t => {
<<<<<<< Updated upstream
      const passwordHash = await hash("123456", 8);
=======
      const passwordHash = await hash("atendimentosinfo", 8);
>>>>>>> Stashed changes
      return Promise.all([
        queryInterface.bulkInsert(
          "Users",
          [
            {
              name: "Admin",
<<<<<<< Updated upstream
              email: "admin@admin.com",
=======
              email: "admin@atendimentos.info",
>>>>>>> Stashed changes
              profile: "admin",
              passwordHash,
              companyId: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
              super: true
            }
          ],
          { transaction: t }
        )
      ]);
    });
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("Users", {});
  }
};
