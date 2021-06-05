"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function default_1(sequelize) {
    const jobs = sequelize.define('jobs', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        positionName: {
            type: sequelize_1.DataTypes.TEXT,
        },
        jobLocation: {
            type: sequelize_1.DataTypes.TEXT,
        },
        jobCode: {
            type: sequelize_1.DataTypes.TEXT,
        },
        releaseDate: {
            type: sequelize_1.DataTypes.DATE,
        },
        generalDescription: {
            type: sequelize_1.DataTypes.TEXT,
        },
        generalGoals: {
            type: sequelize_1.DataTypes.TEXT,
        },
        detailedGoals: {
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
    jobs.associate = (models) => {
        models.jobs.belongsTo(models.departments, {
            as: 'department',
            constraints: false,
        });
        models.jobs.belongsTo(models.user, {
            as: 'supervisor',
            constraints: false,
        });
        models.jobs.hasMany(models.leaveApplicationForm, {
            as: 'leaves',
            constraints: false,
            foreignKey: 'jobsId',
        });
        models.jobs.belongsTo(models.softSkills, {
            as: 'personalAndTechnicalSkills',
            constraints: false,
        });
        models.jobs.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.jobs.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.jobs.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return jobs;
}
exports.default = default_1;
//# sourceMappingURL=jobs.js.map