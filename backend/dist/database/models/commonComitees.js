"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function default_1(sequelize) {
    const commonComitees = sequelize.define('commonComitees', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        addedCommittee: {
            type: sequelize_1.DataTypes.TEXT,
        },
        menus: {
            type: sequelize_1.DataTypes.TEXT,
            validate: {
                isIn: [[
                        ": لجنة المبايعات",
                        "لجنة المسافرات",
                        "لجنة المصالحات",
                        "لجنة اللجان"
                    ]],
            }
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
    commonComitees.associate = (models) => {
        models.commonComitees.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.commonComitees.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.commonComitees.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return commonComitees;
}
exports.default = default_1;
//# sourceMappingURL=commonComitees.js.map