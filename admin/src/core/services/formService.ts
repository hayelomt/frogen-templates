export class FormParser {
  constructor(private _data: Record<string, any>) {}

  get data(): Record<string, any> {
    return this._data;
  }

  static init(data: Record<string, any>): FormParser {
    return new FormParser({ ...data });
  }

  parseDateFields(fields: string[]): FormParser {
    fields.forEach((key) => {
      // console.log(key, this._data[key]);
      if (this._data[key]) {
        this._data[key] = (this._data[key] as Date)
          .toISOString()
          .substring(0, 10);
      }
    });

    return this;
  }

  parseDateTimeFields(fields: string[]): FormParser {
    fields.forEach((key) => {
      if (this._data[key]) {
        this._data[key] = (this._data[key] as Date).toISOString();
      }
    });

    return this;
  }
}

const FormService = {
  parseFormData: (data: Record<string, any>): FormData => {
    const form = new FormData();
    // console.log(data);

    Object.entries(data).forEach(([key, value]) => {
      if (value === null || value === undefined) return;
      switch (typeof value) {
        case 'object':
          if (Array.isArray(value)) {
            value.forEach((item) => {
              form.append(`${key}[]`, item);
            });
          } else {
            form.append(key, value as Blob);
          }
          break;
        case 'boolean':
          form.append(key, value ? '1' : '0');
          break;
        default:
          form.append(key, value as any);
          break;
      }
    });

    return form;
  },
};

export default FormService;
