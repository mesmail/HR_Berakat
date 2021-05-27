"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function default_1(sequelize) {
    const clients = sequelize.define('clients', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        clientName: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: [0, 100],
                notEmpty: true,
            }
        },
        jobCount: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        clientIndustry: {
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
    clients.associate = (models) => {
        models.clients.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.clients.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.clients.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return clients;
}
exports.default = default_1;
//# sourceMappingURL=clients.js.map