export interface ProgramData {
  tabs: {
    descripcion: {
      title: string;
      content: string;
      creditBreakdown: {
        type: string;
        credits: number;
      }[];
      totalCredits: number;
    };
    malla: {
      title: string;
      downloadLink: string;
    };
    docentes: {
      title: string;
      description: string;
      professors: {
        name: string;
        title: string;
      }[];
    };
    inversion: {
      title: string;
      peru: {
        title: string;
        reserve: string;
        total: string;
      };
      ecuador: {
        title: string;
        reserve: string;
        total: string;
      };
      paymentOptions: {
        title: string;
        description: string;
      }[];
    };
    admision: {
      title: string;
      requirements: {
        title: string;
        degree: string;
        documents: string[];
      };
    };
    oficialidad: {
      title: string;
      sunedu: {
        title: string;
        description: string;
      };
    };
  };
}
