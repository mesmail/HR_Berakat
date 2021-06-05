"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const moment_1 = __importDefault(require("moment"));
function default_1(sequelize) {
    const candidates = sequelize.define('candidates', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        candidateName: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [2, 255],
                notEmpty: true,
            }
        },
        candidateReference: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        gender: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
                isIn: [[
                        "ذكر",
                        "أنثى"
                    ]],
            }
        },
        currentCompany: {
            type: sequelize_1.DataTypes.TEXT,
        },
        noticePeriod: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        currentSalary: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        expectedSalary: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        candidateCreatedDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            get: function () {
                // @ts-ignore
                return this.getDataValue('candidateCreatedDate')
                    ? moment_1.default
                        // @ts-ignore
                        .utc(this.getDataValue('candidateCreatedDate'))
                        .format('YYYY-MM-DD')
                    : null;
            },
        },
        tactLevel: {
            type: sequelize_1.DataTypes.TEXT,
            validate: {
                isIn: [[
                        "عالي",
                        "عادي"
                    ]],
            }
        },
        yearsExperience: {
            type: sequelize_1.DataTypes.INTEGER,
            validate: {
                max: 30,
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
    candidates.associate = (models) => {
        models.candidates.belongsTo(models.jobs, {
            as: 'currentPosition',
            constraints: false,
        });
        models.candidates.belongsTo(models.academicCertificates, {
            as: 'academicCertificateSpecialization',
            constraints: false,
        });
        models.candidates.belongsTo(models.trainingCertificates, {
            as: 'trainingCertificates',
            constraints: false,
        });
        models.candidates.belongsTo(models.softSkills, {
            as: 'softSkills',
            constraints: false,
        });
        models.candidates.belongsTo(models.managementSkills, {
            as: 'managementSkills',
            constraints: false,
        });
        models.candidates.belongsTo(models.artisticSkills, {
            as: 'artisticSkills',
            constraints: false,
        });
        models.candidates.belongsTo(models.jobs, {
            as: 'jobs',
            constraints: false,
        });
        models.candidates.hasMany(models.file, {
            as: 'resume',
            foreignKey: 'belongsToId',
            constraints: false,
            scope: {
                belongsTo: models.candidates.getTableName(),
                belongsToColumn: 'resume',
            },
        });
        models.candidates.hasMany(models.file, {
            as: 'photo',
            foreignKey: 'belongsToId',
            constraints: false,
            scope: {
                belongsTo: models.candidates.getTableName(),
                belongsToColumn: 'photo',
            },
        });
        models.candidates.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.candidates.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.candidates.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return candidates;
}
exports.default = default_1;
//# sourceMappingURL=candidates.js.map