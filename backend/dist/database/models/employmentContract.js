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
        employeeName: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        workingPeriod: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {}
        },
        employmentSalary: {
            type: sequelize_1.DataTypes.DECIMAL,
            allowNull: false,
            validate: {}
        },
        jobRoles: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        employeeContactEmail: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        mobileNumber: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {}
        },
        homeAddress: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        contractPeriod: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {}
        },
        startDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            get: function () {
                // @ts-ignore
                return this.getDataValue('startDate')
                    ? moment_1.default
                        // @ts-ignore
                        .utc(this.getDataValue('startDate'))
                        .format('YYYY-MM-DD')
                    : null;
            },
            allowNull: false,
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