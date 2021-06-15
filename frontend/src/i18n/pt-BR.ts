const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Remover',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    confirm: 'Confirmar',
    start: 'Início',
    end: 'Fim',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicação',
  },

  api: {
    menu: 'API',
  },

  entities: {
    jobs: {
        name: 'وظائف',
        label: 'وظائف',
        menu: 'وظائف',
        exporterFileName: 'وظائف_exportados',
        list: {
          menu: 'وظائف',
          title: 'وظائف',
        },
        create: {
          success: 'وظائف salvo com sucesso',
        },
        update: {
          success: 'وظائف salvo com sucesso',
        },
        destroy: {
          success: 'وظائف deletado com sucesso',
        },
        destroyAll: {
          success: 'وظائف(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar وظائف',
        },
        fields: {
          id: 'Id',
          'positionName': 'المسمى الوظيفي',
          'department': 'القسم / الادارة',
          'supervisor': 'المدير المباشر',
          'jobLocation': 'موقع العمل',
          'jobCode': 'الرقم/الرمز',
          'generalDescription': 'الوصف العام',
          'generalGoals': 'الاهداف العامة',
          'detailedGoals': 'الاهداف التفصيلية',
          'academicCertificates': 'الشهادات الأكاديمية',
          'trainingCertificates': 'الشهادات التدريبية',
          'professionalCertificates': 'الشهادات المهنية',
          'softSkills': 'المهارات الناعمة',
          'managementSkills': 'المهارات الإدارية',
          'artitistikSkills': 'ArtitistikSkills',
          'jobFramework': 'أطر الوظيفة',
          'connectionLevel': 'مستوى الاتصال',
          'commonCommittees': 'أللجان المشتركة',
          'jobRequirments': 'متطلبات الوظيفة',
          'jobPath': 'المسار الوظيفي',
          'tasksDuties': 'المهام و الواجبات',
          'administrativeFinancialPowers': 'الصلاحيات الإدارية و المالية',
          'cardInformation': 'بيانات البطاقة',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {
          'supervisor': 'المدير المباشر',
          'jobLocation': 'موقع العمل',
          'jobCode': 'الرقم/الرمز',
          'generalDescription': 'الوصف العام',
          'generalGoals': 'الاهداف العامة',
          'detailedGoals': 'الاهداف التفصيلية',
        },
        hints: {

        },
        new: {
          title: 'Novo وظائف',
        },
        view: {
          title: 'Visualizar وظائف',
        },
        importer: {
          title: 'Importar وظائف',
          fileName: 'jobs_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    candidates: {
        name: 'المتقدمين',
        label: 'المتقدمين',
        menu: 'المتقدمين',
        exporterFileName: 'المتقدمين_exportados',
        list: {
          menu: 'المتقدمين',
          title: 'المتقدمين',
        },
        create: {
          success: 'المتقدمين salvo com sucesso',
        },
        update: {
          success: 'المتقدمين salvo com sucesso',
        },
        destroy: {
          success: 'المتقدمين deletado com sucesso',
        },
        destroyAll: {
          success: 'المتقدمين(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar المتقدمين',
        },
        fields: {
          id: 'Id',
          'candidateName': 'اسم المرشح',
          'currentPosition': 'المنصب الحالى',
          'candidateReference': 'مرجع المرشح',
          'gender': 'نوع الجنس',
          'academicCertificateSpecialization': 'الشهادة العلمية و الاختصاص',
          'trainingCertificates': 'شهادات_تدريب',
          'currentCompany': 'الشركة الحالية',
          'noticePeriodRange': 'فترة إشعار',
          'noticePeriod': 'فترة إشعار',
          'currentSalaryRange': 'الراتب الحالي',
          'currentSalary': 'الراتب الحالي',
          'expectedSalaryRange': 'الراتب المتوقع',
          'expectedSalary': 'الراتب المتوقع',
          'softSkills': 'مهارات ناعمة',
          'managementSkills': 'مهارات الإدارة',
          'artisticSkills': 'مهارات فنية',
          'candidateCreatedDateRange': 'تاريخ إنشاء المرشح',
          'candidateCreatedDate': 'تاريخ إنشاء المرشح',
          'jobs': 'الوظيفة المسندة',
          'resume': 'السيرة الذاتية',
          'photo': 'صورة الموظف ',
          'tactLevel': 'مستوى اللباقة',
          'yearsExperienceRange': 'سنوات الخبرة',
          'yearsExperience': 'سنوات الخبرة',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'gender': {
            'ذكر': 'ذكر',
            'أنثى': 'أنثى',
          },
          'tactLevel': {
            'عالي': 'عالي',
            'عادي': 'عادي',
          },
        },
        placeholders: {
          'candidateName': 'اسم المرشح',
          'currentPosition': 'المنصب الحالى',
          'candidateReference': 'مرجع المرشح',
          'gender': 'نوع الجنس',
          'academicCertificateSpecialization': 'الشهادة العلمية و الاختصاص',
          'currentCompany': 'الشركة الحالية',
          'noticePeriod': 'فترة إشعار',
          'candidateCreatedDate': 'تاريخ إنشاء المرشح',
        },
        hints: {
          'resume': 'السيرة الذاتية',
          'photo': 'صورة الموظف ',
        },
        new: {
          title: 'Novo المتقدمين',
        },
        view: {
          title: 'Visualizar المتقدمين',
        },
        importer: {
          title: 'Importar المتقدمين',
          fileName: 'candidates_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    academicCertificates: {
        name: 'الشهادات الاكاديمية',
        label: 'الشهادات الاكاديمية',
        menu: 'الشهادات الاكاديمية',
        exporterFileName: 'الشهادات الاكاديمية_exportados',
        list: {
          menu: 'الشهادات الاكاديمية',
          title: 'الشهادات الاكاديمية',
        },
        create: {
          success: 'الشهادات الاكاديمية salvo com sucesso',
        },
        update: {
          success: 'الشهادات الاكاديمية salvo com sucesso',
        },
        destroy: {
          success: 'الشهادات الاكاديمية deletado com sucesso',
        },
        destroyAll: {
          success: 'الشهادات الاكاديمية(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar الشهادات الاكاديمية',
        },
        fields: {
          id: 'Id',
          'academicCertificates': 'الشهادات الاكاديمية',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo الشهادات الاكاديمية',
        },
        view: {
          title: 'Visualizar الشهادات الاكاديمية',
        },
        importer: {
          title: 'Importar الشهادات الاكاديمية',
          fileName: 'academicCertificates_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    softSkills: {
        name: 'المهارات الناعمة',
        label: 'المهارات الناعمة',
        menu: 'المهارات الناعمة',
        exporterFileName: 'المهارات الناعمة_exportados',
        list: {
          menu: 'المهارات الناعمة',
          title: 'المهارات الناعمة',
        },
        create: {
          success: 'المهارات الناعمة salvo com sucesso',
        },
        update: {
          success: 'المهارات الناعمة salvo com sucesso',
        },
        destroy: {
          success: 'المهارات الناعمة deletado com sucesso',
        },
        destroyAll: {
          success: 'المهارات الناعمة(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar المهارات الناعمة',
        },
        fields: {
          id: 'Id',
          'name': 'المهارات الناعمة',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {
          'name': 'المهارات الناعمة',
        },
        hints: {
          'name': 'المهارات الناعمة',
        },
        new: {
          title: 'Novo المهارات الناعمة',
        },
        view: {
          title: 'Visualizar المهارات الناعمة',
        },
        importer: {
          title: 'Importar المهارات الناعمة',
          fileName: 'softSkills_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    trainingCertificates: {
        name: 'الشهادات التدريبية',
        label: 'الشهادات التدريبية',
        menu: 'الشهادات التدريبية',
        exporterFileName: 'الشهادات التدريبية_exportados',
        list: {
          menu: 'الشهادات التدريبية',
          title: 'الشهادات التدريبية',
        },
        create: {
          success: 'الشهادات التدريبية salvo com sucesso',
        },
        update: {
          success: 'الشهادات التدريبية salvo com sucesso',
        },
        destroy: {
          success: 'الشهادات التدريبية deletado com sucesso',
        },
        destroyAll: {
          success: 'الشهادات التدريبية(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar الشهادات التدريبية',
        },
        fields: {
          id: 'Id',
          'trainingCertificates': 'Training certificates',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo الشهادات التدريبية',
        },
        view: {
          title: 'Visualizar الشهادات التدريبية',
        },
        importer: {
          title: 'Importar الشهادات التدريبية',
          fileName: 'trainingCertificates_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    professionalCertifications: {
        name: 'الشهادات المهنية',
        label: 'الشهادات المهنية',
        menu: 'الشهادات المهنية',
        exporterFileName: 'الشهادات المهنية_exportados',
        list: {
          menu: 'الشهادات المهنية',
          title: 'الشهادات المهنية',
        },
        create: {
          success: 'الشهادات المهنية salvo com sucesso',
        },
        update: {
          success: 'الشهادات المهنية salvo com sucesso',
        },
        destroy: {
          success: 'الشهادات المهنية deletado com sucesso',
        },
        destroyAll: {
          success: 'الشهادات المهنية(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar الشهادات المهنية',
        },
        fields: {
          id: 'Id',
          'professionalCertifications': 'الشهادات المهنية',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {
          'professionalCertifications': 'الشهادات المهنية',
        },
        hints: {
          'professionalCertifications': 'الشهادات المهنية',
        },
        new: {
          title: 'Novo الشهادات المهنية',
        },
        view: {
          title: 'Visualizar الشهادات المهنية',
        },
        importer: {
          title: 'Importar الشهادات المهنية',
          fileName: 'professionalCertifications_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    managementSkills: {
        name: 'مهارات الإدارة',
        label: 'مهارات الإدارة',
        menu: 'مهارات الإدارة',
        exporterFileName: 'مهارات الإدارة_exportados',
        list: {
          menu: 'مهارات الإدارة',
          title: 'مهارات الإدارة',
        },
        create: {
          success: 'مهارات الإدارة salvo com sucesso',
        },
        update: {
          success: 'مهارات الإدارة salvo com sucesso',
        },
        destroy: {
          success: 'مهارات الإدارة deletado com sucesso',
        },
        destroyAll: {
          success: 'مهارات الإدارة(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar مهارات الإدارة',
        },
        fields: {
          id: 'Id',
          'managementSkills': 'مهارات الإدارة',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo مهارات الإدارة',
        },
        view: {
          title: 'Visualizar مهارات الإدارة',
        },
        importer: {
          title: 'Importar مهارات الإدارة',
          fileName: 'managementSkills_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    artisticSkills: {
        name: 'المهارات الفنية',
        label: 'المهارات الفنية',
        menu: 'المهارات الفنية',
        exporterFileName: 'المهارات الفنية_exportados',
        list: {
          menu: 'المهارات الفنية',
          title: 'المهارات الفنية',
        },
        create: {
          success: 'المهارات الفنية salvo com sucesso',
        },
        update: {
          success: 'المهارات الفنية salvo com sucesso',
        },
        destroy: {
          success: 'المهارات الفنية deletado com sucesso',
        },
        destroyAll: {
          success: 'المهارات الفنية(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar المهارات الفنية',
        },
        fields: {
          id: 'Id',
          'artisticSkills': 'المهارات الفنية',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo المهارات الفنية',
        },
        view: {
          title: 'Visualizar المهارات الفنية',
        },
        importer: {
          title: 'Importar المهارات الفنية',
          fileName: 'artisticSkills_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    clients: {
        name: 'العملاء',
        label: 'العملاء',
        menu: 'العملاء',
        exporterFileName: 'العملاء_exportados',
        list: {
          menu: 'العملاء',
          title: 'العملاء',
        },
        create: {
          success: 'العملاء salvo com sucesso',
        },
        update: {
          success: 'العملاء salvo com sucesso',
        },
        destroy: {
          success: 'العملاء deletado com sucesso',
        },
        destroyAll: {
          success: 'العملاء(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar العملاء',
        },
        fields: {
          id: 'Id',
          'clientName': 'اسم العميل ',
          'jobCountRange': 'عدد الوظائف',
          'jobCount': 'عدد الوظائف',
          'clientIndustry': 'صناعة العميل',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo العملاء',
        },
        view: {
          title: 'Visualizar العملاء',
        },
        importer: {
          title: 'Importar العملاء',
          fileName: 'clients_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    usersNew: {
        name: 'المستخدمين',
        label: 'المستخدمين',
        menu: 'المستخدمين',
        exporterFileName: 'المستخدمين_exportados',
        list: {
          menu: 'المستخدمين',
          title: 'المستخدمين',
        },
        create: {
          success: 'المستخدمين salvo com sucesso',
        },
        update: {
          success: 'المستخدمين salvo com sucesso',
        },
        destroy: {
          success: 'المستخدمين deletado com sucesso',
        },
        destroyAll: {
          success: 'المستخدمين(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar المستخدمين',
        },
        fields: {
          id: 'Id',
          'email': 'البريد الالكتروني',
          'firsrtName': 'الاسم الاول ',
          'secondName': 'الاسم الثاني',
          'phoneNumber': 'رقم الهاتف',
          'roles': 'الأدوار',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'roles': {
            'مدراء الاقسام': 'مدراء الاقسام',
            'العملاء': 'العملاء',
            'الموظفين': 'الموظفين',
            'مدير الموقع': 'مدير الموقع',
          },
        },
        placeholders: {
          'email': 'البريد الالكتروني',
          'firsrtName': 'الاسم الاول ',
          'secondName': 'الاسم الثاني',
          'phoneNumber': 'رقم الهاتف',
          'roles': 'الأدوار',
        },
        hints: {

        },
        new: {
          title: 'Novo المستخدمين',
        },
        view: {
          title: 'Visualizar المستخدمين',
        },
        importer: {
          title: 'Importar المستخدمين',
          fileName: 'usersNew_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    jobFrameworks: {
        name: 'أطر الوظيفة',
        label: 'أطر الوظيفة',
        menu: 'أطر الوظيفة',
        exporterFileName: 'أطر الوظيفة_exportados',
        list: {
          menu: 'أطر الوظيفة',
          title: 'أطر الوظيفة',
        },
        create: {
          success: 'أطر الوظيفة salvo com sucesso',
        },
        update: {
          success: 'أطر الوظيفة salvo com sucesso',
        },
        destroy: {
          success: 'أطر الوظيفة deletado com sucesso',
        },
        destroyAll: {
          success: 'أطر الوظيفة(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar أطر الوظيفة',
        },
        fields: {
          id: 'Id',
          'takeMultipleTasks': 'تولي مهام متعددة',
          'impactSalary': 'التأثير على الراتب',
          'impactJobGrade': 'التأثير على الدرجة الوظيفية',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo أطر الوظيفة',
        },
        view: {
          title: 'Visualizar أطر الوظيفة',
        },
        importer: {
          title: 'Importar أطر الوظيفة',
          fileName: 'jobFrameworks_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    leaveApplicationForm: {
        name: 'استمارة طلب إجازة',
        label: 'استمارة طلب إجازة',
        menu: 'استمارة طلب إجازة',
        exporterFileName: 'استمارة طلب إجازة_exportados',
        list: {
          menu: 'استمارة طلب إجازة',
          title: 'استمارة طلب إجازة',
        },
        create: {
          success: 'استمارة طلب إجازة salvo com sucesso',
        },
        update: {
          success: 'استمارة طلب إجازة salvo com sucesso',
        },
        destroy: {
          success: 'استمارة طلب إجازة deletado com sucesso',
        },
        destroyAll: {
          success: 'استمارة طلب إجازة(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar استمارة طلب إجازة',
        },
        fields: {
          id: 'Id',
          'name': 'الاسم',
          'position': 'المنصب',
          'department': 'القسم',
          'dateRange': 'التاريخ',
          'date': 'التاريخ',
          'contactNo': 'رقم الاتصال',
          'employeeNo': 'رقم الموظف',
          'absenceWorkRange': 'الرجاء الموافقة على التغيب عن العمل لمدة ________ يوم',
          'absenceWork': 'الرجاء الموافقة على التغيب عن العمل لمدة ________ يوم',
          'periodRange': 'من ______ إلى _______ ، ضمناً',
          'period': 'من ______ إلى _______ ، ضمناً',
          'specify': 'أسباب الغياب:',
          'reasons': 'نوع الاجازات',
          'others': ':',
          'noDaysRange': 'عدد الأيام المتاحة',
          'noDays': 'عدد الأيام المتاحة',
          'noTakenRange': 'عدد أيام الإجازة المأخوذة',
          'noTaken': 'عدد أيام الإجازة المأخوذة',
          'noBalanceRange': 'عدد أيام رصيد الإجازة',
          'noBalance': 'عدد أيام رصيد الإجازة',
          'remarks': 'ملاحظات',
          'status': 'حالة طلب الإجازة',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'reasons': {
            'الإجازة السنوية': 'الإجازة السنوية',
            'الإجازة المرضية': 'الإجازة المرضية',
            'إجازة الأمومة': 'إجازة الأمومة',
            'إجازة الرأفة': 'إجازة الرأفة',
            'إجازة غير مدفوعة الأجر': 'إجازة غير مدفوعة الأجر',
            'أخرى يرجى التحديد:': 'أخرى يرجى التحديد:',
          },
          'status': {
            'تمت الموافقة عليها من قبل الإدارة المختصة': 'تمت الموافقة عليها من قبل الإدارة المختصة',
            'رفضتها الإدارة المختصة': 'رفضتها الإدارة المختصة',
            'موافقة إدارة الموارد البشرية': 'موافقة إدارة الموارد البشرية',
            'رفضنها إدارة الموارد البشرية': 'رفضنها إدارة الموارد البشرية',
            'موافقة المدير العام': 'موافقة المدير العام',
            'رفضها المدير العام': 'رفضها المدير العام',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo استمارة طلب إجازة',
        },
        view: {
          title: 'Visualizar استمارة طلب إجازة',
        },
        importer: {
          title: 'Importar استمارة طلب إجازة',
          fileName: 'leaveApplicationForm_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    employmentContract: {
        name: 'عقد العمل ',
        label: 'عقد العمل',
        menu: 'عقد العمل',
        exporterFileName: 'عقد العمل _exportados',
        list: {
          menu: 'عقد العمل',
          title: 'عقد العمل',
        },
        create: {
          success: 'عقد العمل  salvo com sucesso',
        },
        update: {
          success: 'عقد العمل  salvo com sucesso',
        },
        destroy: {
          success: 'عقد العمل  deletado com sucesso',
        },
        destroyAll: {
          success: 'عقد العمل (s) deletado com sucesso',
        },
        edit: {
          title: 'Editar عقد العمل ',
        },
        fields: {
          id: 'Id',
          'contractDateRange': 'تاريخ إبرام العقد',
          'contractDate': 'تاريخ إبرام العقد',
          'companyRepresentative': 'ممثل الشركة',
          'secondParty': 'الطرف الثاني',
          'nationality': 'الجنسية',
          'passportNumber': 'رقم جواز السفر',
          'passportIssueDateRange': 'تاريخ صدور جواز السفر',
          'passportIssueDate': 'تاريخ صدور جواز السفر',
          'email': 'البريد الإلكتروني',
          'jobTitle': 'المسمى الوظيفي',
          'dailyWorkingHoursRange': 'ساعات العمل اليومية',
          'dailyWorkingHours': 'ساعات العمل اليومية',
          'weeklyWorkingHoursRange': 'ساعات العمل الأسبوعية',
          'weeklyWorkingHours': 'ساعات العمل الأسبوعية',
          'weekEndDay': 'يوم الراحة',
          'workStartDateRange': 'تاريخ بدء العمل',
          'workStartDate': 'تاريخ بدء العمل',
          'employeeName': 'اسم العامل',
          'positionName': 'المسمى الوظيفي',
          'basicSalaryRange': 'ألراتب الأساسي',
          'basicSalary': 'ألراتب الأساسي',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {
          'companyRepresentative': 'ممثل الشركة في العقد',
          'secondParty': 'الطرف الثاني من العقد',
          'nationality': 'الجنسية',
          'passportNumber': 'رقم جواز السفر',
          'email': 'البريد الإلكتروني',
          'jobTitle': 'المسمى الوظيفي',
          'dailyWorkingHours': 'عدد ساعات العمل الفعلية اليومية',
          'weeklyWorkingHours': 'عدد ساعات العمل الفعلية بالأسبوع',
          'weekEndDay': 'يوم الراحة',
          'employeeName': 'اسم العامل/المتعاقد معه',
          'positionName': 'المسمى الوظيفي',
          'basicSalary': 'الراتب الأساسي',
        },
        hints: {

        },
        new: {
          title: 'Novo عقد العمل ',
        },
        view: {
          title: 'Visualizar عقد العمل ',
        },
        importer: {
          title: 'Importar عقد العمل',
          fileName: 'employmentContract_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    connectionLevel: {
        name: 'مستوى الاتصال',
        label: 'ConnectionLevels',
        menu: 'ConnectionLevels',
        exporterFileName: 'مستوى الاتصال_exportados',
        list: {
          menu: 'ConnectionLevels',
          title: 'ConnectionLevels',
        },
        create: {
          success: 'مستوى الاتصال salvo com sucesso',
        },
        update: {
          success: 'مستوى الاتصال salvo com sucesso',
        },
        destroy: {
          success: 'مستوى الاتصال deletado com sucesso',
        },
        destroyAll: {
          success: 'مستوى الاتصال(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar مستوى الاتصال',
        },
        fields: {
          id: 'Id',
          'external': 'الخارجي',
          'internal': 'الداخلي',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {
          'external': 'حدد مستوى الاتصال بكلمة',
          'internal': 'حدد مستوى الاتصال بكلمة',
        },
        hints: {

        },
        new: {
          title: 'Novo مستوى الاتصال',
        },
        view: {
          title: 'Visualizar مستوى الاتصال',
        },
        importer: {
          title: 'Importar ConnectionLevels',
          fileName: 'connectionLevel_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    commonComitees: {
        name: 'اللجان المشتركة',
        label: 'CommonComitees',
        menu: 'CommonComitees',
        exporterFileName: 'اللجان المشتركة_exportados',
        list: {
          menu: 'CommonComitees',
          title: 'CommonComitees',
        },
        create: {
          success: 'اللجان المشتركة salvo com sucesso',
        },
        update: {
          success: 'اللجان المشتركة salvo com sucesso',
        },
        destroy: {
          success: 'اللجان المشتركة deletado com sucesso',
        },
        destroyAll: {
          success: 'اللجان المشتركة(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar اللجان المشتركة',
        },
        fields: {
          id: 'Id',
          'addedCommittee': 'اللجان المضافة',
          'menus': 'Menus',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'menus': {
            ': لجنة المبايعات': ': لجنة المبايعات',
            'لجنة المسافرات': 'لجنة المسافرات',
            'لجنة المصالحات': 'لجنة المصالحات',
            'لجنة اللجان': 'لجنة اللجان',
          },
        },
        placeholders: {
          'addedCommittee': 'أضف اسم اللجنة هنا',
        },
        hints: {

        },
        new: {
          title: 'Novo اللجان المشتركة',
        },
        view: {
          title: 'Visualizar اللجان المشتركة',
        },
        importer: {
          title: 'Importar CommonComitees',
          fileName: 'commonComitees_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    jobRequirments: {
        name: 'متطلبات الوظيفة',
        label: 'JobRequirments',
        menu: 'JobRequirments',
        exporterFileName: 'متطلبات الوظيفة_exportados',
        list: {
          menu: 'JobRequirments',
          title: 'JobRequirments',
        },
        create: {
          success: 'متطلبات الوظيفة salvo com sucesso',
        },
        update: {
          success: 'متطلبات الوظيفة salvo com sucesso',
        },
        destroy: {
          success: 'متطلبات الوظيفة deletado com sucesso',
        },
        destroyAll: {
          success: 'متطلبات الوظيفة(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar متطلبات الوظيفة',
        },
        fields: {
          id: 'Id',
          'tactLevel': 'مستوى اللباقة',
          'experienceYearsRange': 'سنوات الخبرة',
          'experienceYears': 'سنوات الخبرة',
          'minKPI': 'الحد الأدنى لمعايير الأداء المتوقع',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo متطلبات الوظيفة',
        },
        view: {
          title: 'Visualizar متطلبات الوظيفة',
        },
        importer: {
          title: 'Importar JobRequirments',
          fileName: 'jobRequirments_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    jobPath: {
        name: 'المسار الوظيفي',
        label: 'JobPaths',
        menu: 'JobPaths',
        exporterFileName: 'المسار الوظيفي_exportados',
        list: {
          menu: 'JobPaths',
          title: 'JobPaths',
        },
        create: {
          success: 'المسار الوظيفي salvo com sucesso',
        },
        update: {
          success: 'المسار الوظيفي salvo com sucesso',
        },
        destroy: {
          success: 'المسار الوظيفي deletado com sucesso',
        },
        destroyAll: {
          success: 'المسار الوظيفي(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar المسار الوظيفي',
        },
        fields: {
          id: 'Id',
          'jobName': 'الوظيفة',
          'promotionIndicators': 'مؤشرات الترقي',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo المسار الوظيفي',
        },
        view: {
          title: 'Visualizar المسار الوظيفي',
        },
        importer: {
          title: 'Importar JobPaths',
          fileName: 'jobPath_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    tasksDuties: {
        name: 'TasksDuties',
        label: 'TasksDuties',
        menu: 'TasksDuties',
        exporterFileName: 'TasksDuties_exportados',
        list: {
          menu: 'TasksDuties',
          title: 'TasksDuties',
        },
        create: {
          success: 'TasksDuties salvo com sucesso',
        },
        update: {
          success: 'TasksDuties salvo com sucesso',
        },
        destroy: {
          success: 'TasksDuties deletado com sucesso',
        },
        destroyAll: {
          success: 'TasksDuties(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar TasksDuties',
        },
        fields: {
          id: 'Id',
          'tasksDuties': 'المهام و الواجبات',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo TasksDuties',
        },
        view: {
          title: 'Visualizar TasksDuties',
        },
        importer: {
          title: 'Importar TasksDuties',
          fileName: 'tasksDuties_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    administrativeFinancialPowers: {
        name: 'الصلاحيات الإدارية و المالية',
        label: 'AdministrativeFinancialPowers',
        menu: 'AdministrativeFinancialPowers',
        exporterFileName: 'الصلاحيات الإدارية و المالية_exportados',
        list: {
          menu: 'AdministrativeFinancialPowers',
          title: 'AdministrativeFinancialPowers',
        },
        create: {
          success: 'الصلاحيات الإدارية و المالية salvo com sucesso',
        },
        update: {
          success: 'الصلاحيات الإدارية و المالية salvo com sucesso',
        },
        destroy: {
          success: 'الصلاحيات الإدارية و المالية deletado com sucesso',
        },
        destroyAll: {
          success: 'الصلاحيات الإدارية و المالية(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar الصلاحيات الإدارية و المالية',
        },
        fields: {
          id: 'Id',
          'administrativeFinancialPowers': 'الصلاحيات الإدارية و المالية',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo الصلاحيات الإدارية و المالية',
        },
        view: {
          title: 'Visualizar الصلاحيات الإدارية و المالية',
        },
        importer: {
          title: 'Importar AdministrativeFinancialPowers',
          fileName: 'administrativeFinancialPowers_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    cardInformation: {
        name: 'بيانات البطاقة',
        label: 'CardInformations',
        menu: 'CardInformations',
        exporterFileName: 'بيانات البطاقة_exportados',
        list: {
          menu: 'CardInformations',
          title: 'CardInformations',
        },
        create: {
          success: 'بيانات البطاقة salvo com sucesso',
        },
        update: {
          success: 'بيانات البطاقة salvo com sucesso',
        },
        destroy: {
          success: 'بيانات البطاقة deletado com sucesso',
        },
        destroyAll: {
          success: 'بيانات البطاقة(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar بيانات البطاقة',
        },
        fields: {
          id: 'Id',
          'version': 'الإصدار',
          'dateRange': 'التاريخ',
          'date': 'التاريخ',
          'generalManager': 'المدير العام',
          'hRManager': 'مدير الموارد البشرية',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo بيانات البطاقة',
        },
        view: {
          title: 'Visualizar بيانات البطاقة',
        },
        importer: {
          title: 'Importar CardInformations',
          fileName: 'cardInformation_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    tellProblem: {
        name: 'الإبلاغ عن مشكلة',
        label: 'TellProblems',
        menu: 'TellProblems',
        exporterFileName: 'الإبلاغ عن مشكلة_exportados',
        list: {
          menu: 'TellProblems',
          title: 'TellProblems',
        },
        create: {
          success: 'الإبلاغ عن مشكلة salvo com sucesso',
        },
        update: {
          success: 'الإبلاغ عن مشكلة salvo com sucesso',
        },
        destroy: {
          success: 'الإبلاغ عن مشكلة deletado com sucesso',
        },
        destroyAll: {
          success: 'الإبلاغ عن مشكلة(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar الإبلاغ عن مشكلة',
        },
        fields: {
          id: 'Id',
          'problemDescription': 'شرح محتوى المشكلة',
          'problemDateRange': 'تاريخ الحدوث',
          'problemDate': 'تاريخ الحدوث',
          'problemCauses': 'الأسباب المحتملة',
          'problemSolutions': 'الحلول المقترحة',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {
          'problemDescription': 'شرح المشكلة هنا',
          'problemCauses': 'الأسباب المحتملة',
          'problemSolutions': 'الحلول المقترحة',
        },
        hints: {

        },
        new: {
          title: 'Novo الإبلاغ عن مشكلة',
        },
        view: {
          title: 'Visualizar الإبلاغ عن مشكلة',
        },
        importer: {
          title: 'Importar TellProblems',
          fileName: 'tellProblem_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    departments: {
        name: 'الأقسام',
        label: 'Departments',
        menu: 'Departments',
        exporterFileName: 'الأقسام_exportados',
        list: {
          menu: 'Departments',
          title: 'Departments',
        },
        create: {
          success: 'الأقسام salvo com sucesso',
        },
        update: {
          success: 'الأقسام salvo com sucesso',
        },
        destroy: {
          success: 'الأقسام deletado com sucesso',
        },
        destroyAll: {
          success: 'الأقسام(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar الأقسام',
        },
        fields: {
          id: 'Id',
          'departments': 'ألأقسام',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {
          'departments': 'القسم',
        },
        hints: {

        },
        new: {
          title: 'Novo الأقسام',
        },
        view: {
          title: 'Visualizar الأقسام',
        },
        importer: {
          title: 'Importar Departments',
          fileName: 'departments_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },

  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    social: {
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salvo com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletado com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletado com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    validation: {
      url:
        'A URL pode conter apenas letras minúsculas, números e traços (e deve iniciar com letra ou número).',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success:
        'Configurações salvas com sucesso. A página irá recarregar em {0} para que as alterações tenham efeito.',
    },
    fields: {
      theme: 'Tema',
      primaryColor: 'Cor Primária',
      secondaryColor: 'Cor Secundária',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
    colors: {
      default: 'Padrão',
      amber: 'Âmbar',
      blue: 'Azul',
      cyan: 'Ciano',
      deep_orange: 'Laranja Escuro',
      deep_purple: 'Roxo Escuro',
      green: 'Azul',
      indigo: 'Índigo',
      light_blue: 'Azul Fraco',
      light_green: 'Verde Fraco',
      lime: 'Limão',
      orange: 'Laranja',
      pink: 'Rosa',
      purple: 'Roxo',
      red: 'Vermelho',
      teal: 'Verde Azulado',
      yellow: 'Amarelo',
      grey: 'Cinza',
      blue_grey: 'Azul Cinza',
      brown: 'Marrom',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/src/app/dashboard/components/dashboard.component.html.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
      type: '${path} deve ser um número',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  paginator: {
    itemsPerPageLabel: 'Itens por página:',
    nextPageLabel: 'Próxima',
    previousPageLabel: 'Anterior',
    firstPageLabel: 'Primeira página',
    lastPageLabel: 'Última página',
    getRangeLabel: {
      zero: '0 de {0}',
      interval: '{0} - {1} de {2}',
    },
  },

  datetime: {
    upSecondLabel: 'Adicionar um segundo',
    downSecondLabel: 'Diminuir um segundo',
    upMinuteLabel: 'Adicionar um minuto',
    downMinuteLabel: 'Diminuir um minuto',
    upHourLabel: 'Adicionar uma hora',
    downHourLabel: 'Diminuir uma hora',
    prevMonthLabel: 'Mês anterior',
    nextMonthLabel: 'Mês seguinte',
    prevYearLabel: 'Ano anterior',
    nextYearLabel: 'Ano seguinte',
    prevMultiYearLabel: '21 anos anteriores',
    nextMultiYearLabel: '21 anos próximos',
    switchToMonthViewLabel: 'Alterar para visão mensal',
    switchToMultiYearViewLabel: 'Escolher mês e ano',
    cancelBtnLabel: 'Cancelar',
    setBtnLabel: 'Confirmar',
    rangeFromLabel: 'De',
    rangeToLabel: 'Até',
    hour12AMLabel: 'AM',
    hour12PMLabel: 'PM',
  },

  table: {
    noData: 'Não há dados',
    loading: 'Carregando...',
  },

  autocomplete: {
    loading: 'Carregando...',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },
};

export default ptBR;
