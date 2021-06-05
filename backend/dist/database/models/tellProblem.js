"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const moment_1 = __importDefault(require("moment"));
function default_1(sequelize) {
    const tellProblem = sequelize.define('tellProblem', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        problemDescription: {
            type: sequelize_1.DataTypes.TEXT,
        },
        occuranceDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            get: function () {
                // @ts-ignore
                return this.getDataValue('occuranceDate')
                    ? moment_1.default
                        // @ts-ignore
                        .utc(this.getDataValue('occuranceDate'))
                        .format('YYYY-MM-DD')
                    : null;
            },
        },
        possibleCauses: {
            type: sequelize_1.DataTypes.TEXT,
        },
        suggestedSolves: {
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
    tellProblem.associate = (models) => {
        models.tellProblem.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.tellProblem.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.tellProblem.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return tellProblem;
}
exports.default = default_1;
//# sourceMappingURL=tellProblem.js.map