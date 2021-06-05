"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const moment_1 = __importDefault(require("moment"));
function default_1(sequelize) {
    const advancedPayment = sequelize.define('advancedPayment', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        amount: {
            type: sequelize_1.DataTypes.DECIMAL,
            validate: {
                max: 10000,
            }
        },
        dateRequired: {
            type: sequelize_1.DataTypes.DATEONLY,
            get: function () {
                // @ts-ignore
                return this.getDataValue('dateRequired')
                    ? moment_1.default
                        // @ts-ignore
                        .utc(this.getDataValue('dateRequired'))
                        .format('YYYY-MM-DD')
                    : null;
            },
        },
        paymentReason: {
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
    advancedPayment.associate = (models) => {
        models.advancedPayment.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.advancedPayment.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.advancedPayment.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return advancedPayment;
}
exports.default = default_1;
//# sourceMappingURL=advancedPayment.js.map