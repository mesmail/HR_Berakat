"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function default_1(sequelize) {
    const managementSkills = sequelize.define('managementSkills', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        managementSkills: {
            type: sequelize_1.DataTypes.TEXT,
        },
        importHash: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true,
            validate: {
                len: [0, 255],
            },
        },
    }, {
        indexes: [
            {
                unique: true,
                fields: ['importHash', 'tenantId'],
                where: {
                    deletedAt: null,
                },
            },
        ],
        timestamps: true,
        paranoid: true,
    });
    managementSkills.associate = (models) => {
        models.managementSkills.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.managementSkills.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.managementSkills.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return managementSkills;
}
exports.default = default_1;
//# sourceMappingURL=managementSkills.js.map