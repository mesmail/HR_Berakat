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
        models.jobs.belongsToMany(models.departments, {
            as: 'department',
            constraints: false,
            through: 'jobsDepartmentDepartments',
        });
        models.jobs.belongsTo(models.user, {
            as: 'supervisor',
            constraints: false,
        });
        models.jobs.belongsTo(models.academicCertificates, {
            as: 'academicCertificates',
            constraints: false,
        });
        models.jobs.belongsTo(models.trainingCertificates, {
            as: 'trainingCertificates',
            constraints: false,
        });
        models.jobs.belongsTo(models.professionalCertifications, {
            as: 'professionalCertificates',
            constraints: false,
        });
        models.jobs.belongsTo(models.softSkills, {
            as: 'softSkills',
            constraints: false,
        });
        models.jobs.belongsTo(models.managementSkills, {
            as: 'managementSkills',
            constraints: false,
        });
        models.jobs.belongsTo(models.artisticSkills, {
            as: 'artitistikSkills',
            constraints: false,
        });
        models.jobs.belongsTo(models.jobFrameworks, {
            as: 'jobFramework',
            constraints: false,
        });
        models.jobs.belongsTo(models.connectionLevel, {
            as: 'connectionLevel',
            constraints: false,
        });
        models.jobs.belongsToMany(models.commonComitees, {
            as: 'commonCommittees',
            constraints: false,
            through: 'jobsCommonCommitteesCommonComitees',
        });
        models.jobs.belongsTo(models.jobRequirments, {
            as: 'jobRequirments',
            constraints: false,
        });
        models.jobs.belongsTo(models.jobPath, {
            as: 'jobPath',
            constraints: false,
        });
        models.jobs.belongsTo(models.tasksDuties, {
            as: 'tasksDuties',
            constraints: false,
        });
        models.jobs.belongsTo(models.administrativeFinancialPowers, {
            as: 'administrativeFinancialPowers',
            constraints: false,
        });
        models.jobs.belongsTo(models.cardInformation, {
            as: 'cardInformation',
            constraints: false,
            foreignKey: {
                allowNull: false,
            },
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