"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function default_1(sequelize) {
    const cardInformation = sequelize.define('cardInformation', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        version: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        date: {
            type: sequelize_1.DataTypes.DATE,
        },
        generalManager: {
            type: sequelize_1.DataTypes.TEXT,
        },
        hRManager: {
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
            }
        ],
        timestamps: true,
        paranoid: true,
    });
    cardInformation.associate = (models) => {
        models.cardInformation.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.cardInformation.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.cardInformation.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return cardInformation;
}
exports.default = default_1;
//# sourceMappingURL=cardInformation.js.map