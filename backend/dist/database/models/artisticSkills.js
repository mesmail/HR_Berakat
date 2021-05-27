"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function default_1(sequelize) {
    const artisticSkills = sequelize.define('artisticSkills', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        artisticSkills: {
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
    artisticSkills.associate = (models) => {
        models.artisticSkills.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.artisticSkills.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.artisticSkills.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return artisticSkills;
}
exports.default = default_1;
//# sourceMappingURL=artisticSkills.js.map