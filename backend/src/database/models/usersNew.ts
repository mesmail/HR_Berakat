import { DataTypes } from 'sequelize';import SequelizeArrayUtils from '../utils/sequelizeArrayUtils';

export default function (sequelize) {
  const usersNew = sequelize.define(
    'usersNew',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [8, 255],
          notEmpty: true,
        }
      },
      firsrtName: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [3, 255],
          notEmpty: true,
        }
      },
      secondName: {
        type: DataTypes.TEXT,
      },
      phoneNumber: {
        type: DataTypes.STRING(11),
        allowNull: false,
        validate: {
          len: [9, 11],
          notEmpty: true,
        }
      },
      roles: {
        type: SequelizeArrayUtils.DataType,
        validate: {
          isValidOption: function (value) {
            if (!value || !value.length) {
              return value;
            }

            const validOptions: any = [
        "مدراء الاقسام",
        "العملاء",
        "الموظفين",
        "مدير الموقع"
      ];

            if (
              value.some(
                (item) => !validOptions.includes(item),
              )
            ) {
              throw new Error(
                `${value} is not a valid option`,
              );
            }

            return value;
          },
        },
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,    
        validate: {
          len: [0, 255],
        },    
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['importHash', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
        {
          unique: true,
          fields: ['email', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
        {
          unique: true,
          fields: ['phoneNumber', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  usersNew.associate = (models) => {



    
    models.usersNew.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.usersNew.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.usersNew.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return usersNew;
}
