"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function default_1(sequelize) {
    const jobRequirments = sequelize.define('jobRequirments', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        tactLevel: {
            type: sequelize_1.DataTypes.TEXT,
        },
        experienceYears: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        minKPI: {
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
    jobRequirments.associate = (models) => {
        models.jobRequirments.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.jobRequirments.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.jobRequirments.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return jobRequirments;
}
exports.default = default_1;
//# sourceMappingURL=jobRequirments.js.map