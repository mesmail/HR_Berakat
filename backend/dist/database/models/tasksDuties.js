"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function default_1(sequelize) {
    const tasksDuties = sequelize.define('tasksDuties', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        tasksDuties: {
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
    tasksDuties.associate = (models) => {
        models.tasksDuties.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.tasksDuties.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.tasksDuties.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return tasksDuties;
}
exports.default = default_1;
//# sourceMappingURL=tasksDuties.js.map