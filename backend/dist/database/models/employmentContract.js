"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const moment_1 = __importDefault(require("moment"));
function default_1(sequelize) {
    const employmentContract = sequelize.define('employmentContract', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        contractDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            get: function () {
                // @ts-ignore
                return this.getDataValue('contractDate')
                    ? moment_1.default
                        // @ts-ignore
                        .utc(this.getDataValue('contractDate'))
                        .format('YYYY-MM-DD')
                    : null;
            },
            allowNull: false,
        },
        companyRepresentative: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        secondParty: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        nationality: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        passportNumber: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        passportIssueDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            get: function () {
                // @ts-ignore
                return this.getDataValue('passportIssueDate')
                    ? moment_1.default
                        // @ts-ignore
                        .utc(this.getDataValue('passportIssueDate'))
                        .format('YYYY-MM-DD')
                    : null;
            },
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        jobTitle: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        dailyWorkingHours: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {}
        },
        weeklyWorkingHours: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {}
        },
        weekEndDay: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        workStartDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            get: function () {
                // @ts-ignore
                return this.getDataValue('workStartDate')
                    ? moment_1.default
                        // @ts-ignore
                        .utc(this.getDataValue('workStartDate'))
                        .format('YYYY-MM-DD')
                    : null;
            },
            allowNull: false,
        },
        employeeName: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        positionName: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        basicSalary: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {}
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
    employmentContract.associate = (models) => {
        models.employmentContract.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.employmentContract.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.employmentContract.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return employmentContract;
}
exports.default = default_1;
//# sourceMappingURL=employmentContract.js.map