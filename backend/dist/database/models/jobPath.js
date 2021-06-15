"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function default_1(sequelize) {
    const jobPath = sequelize.define('jobPath', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        jobName: {
            type: sequelize_1.DataTypes.TEXT,
        },
        promotionIndicators: {
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
    jobPath.associate = (models) => {
        models.jobPath.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.jobPath.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.jobPath.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return jobPath;
}
exports.default = default_1;
//# sourceMappingURL=jobPath.js.map