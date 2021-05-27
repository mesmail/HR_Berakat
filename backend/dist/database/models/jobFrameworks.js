"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function default_1(sequelize) {
    const jobFrameworks = sequelize.define('jobFrameworks', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        takeMultipleTasks: {
            type: sequelize_1.DataTypes.TEXT,
        },
        impactSalary: {
            type: sequelize_1.DataTypes.TEXT,
        },
        impactJobGrade: {
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
    jobFrameworks.associate = (models) => {
        models.jobFrameworks.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.jobFrameworks.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.jobFrameworks.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return jobFrameworks;
}
exports.default = default_1;
//# sourceMappingURL=jobFrameworks.js.map