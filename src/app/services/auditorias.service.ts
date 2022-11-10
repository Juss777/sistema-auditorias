import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class AuditoriaService {
  constructor(private http: HttpClient) {}
  noFicha: boolean = true;
  verFicha: boolean = false;
  tituloFicha = "BAZ 2016";
  tipoDetalle = "";
  fichaActive: boolean = false;

  auditorias = [
    {
      id: 1,
      header: "Auditoría",
      content: "BAZ 2016",
      footer: "Fecha de proxima entrega: 12 sep 22",
      active: false,
      tipoCard: "informativo",
    },
    {
      id: 2,
      header: "Auditoría",
      content: "BAZ 2018",
      footer: "Fecha de proxima entrega: 12 sep 22",
      active: false,
      tipoCard: "mal",
    },
    {
      id: 3,
      header: "Auditoría",
      content: "BAZ 2019",
      footer: "Fecha de proxima entrega: 12 sep 22",
      active: false,
      tipoCard: "cambios",
    },
  ];

  notificaciones = [
    {
      id: 1,
      header: "Hoy a las 15:30 hrs",
      content: "Tienes dos días para desahogar un oficio",
      tipoNotificacion: "verde",
    },
    {
      id: 2,
      header: "Hoy a las 18:00 hrs",
      content: "Se actualizó el estatus de tu auditoría",
      tipoNotificacion: "verde",
    },
    {
      id: 3,
      header: "Ayer a las 15:30 hrs",
      content: "Corregir y subir balanza de pagos",
      tipoNotificacion: "verde",
    },
    {
      id: 4,
      header: "Ayer a las 15:30 hrs",
      content: "Corregir y subir balanza de pagos",
      tipoNotificacion: "verde",
    },
  ];

  auditoriaDetalles: any[] = [
    {
      id: 1,
      anio: "2017",
      unidadNegocio: "Banco Azteca",
      siglas: "BAZ",
      nombre: "BAZ 2017",
      monto: "433",
      representanteLegal: [["Representante 2"], ["Representante 3"]],
      instrumentoPublicoPoder: [["Instrumento Público 1"]],
      instrumentoPublico: ["Mancuernas_UX_Service.pdf"],
      areaEquipo: [["área 1"], ["área 2"], ["área 1"]],
      responsableEquipo: [
        ["Responsable Área 1"],
        ["Responsable Área 2"],
        ["Responsable Área 1"],
      ],
      contencioso: ["contencioso 2"],
      equipo: "",
      autoridad: ["autoridad 1"],
      area: ["área 1"],
      administradorGeneral: ["Admin General 1"],
      administradorCentral: ["Admin Central 2"],
      administrador: ["Administrador 1"],
      conceptos: "<p>drfgdfrhdfhdfbfdb</p>",
      defensa: "<p>fdbdfbfdbfdbd</p>",
      tipoCard: "cambios",
      active: false,
    },
    {
      id: 2,
      anio: "2018",
      unidadNegocio: "Banco Azteca",
      siglas: "BAZ",
      nombre: "BAZ 2018",
      monto: "2433",
      representanteLegal: [["Representante 2"], ["Representante 3"]],
      instrumentoPublicoPoder: [
        ["Instrumento Público 1"],
        ["Instrumento Público 2"],
      ],
      instrumentoPublico: [
        "Mancuernas_UX_Service.pdf",
        "Cita - 2022-10-03T175816.949 (1).pdf",
      ],
      areaEquipo: [["área 1"], ["área 2"], ["área 1"]],
      responsableEquipo: [
        ["Responsable Área 1"],
        ["Responsable Área 2"],
        ["Responsable Área 1"],
      ],
      contencioso: ["contencioso 2"],
      equipo: "",
      autoridad: ["autoridad 1"],
      area: ["área 1"],
      administradorGeneral: ["Admin General 1"],
      administradorCentral: ["Admin Central 2"],
      administrador: ["Administrador 1"],
      conceptos: "<p>drfgdfrhdfhdfbfdb</p>",
      defensa: "<p>fdbdfbfdbfdbd</p>",
      tipoCard: "informativo",
      active: false,
    },
    {
      id: 3,
      anio: "2019",
      unidadNegocio: "Banco Azteca",
      siglas: "BAZ",
      nombre: "BAZ 2019",
      monto: "35000",
      representanteLegal: [["Representante 2"], ["Representante 3"]],
      instrumentoPublicoPoder: [
        ["Instrumento Público 1"],
        ["Instrumento Público 2"],
      ],
      instrumentoPublico: [
        "Mancuernas_UX_Service.pdf",
        "Cita - 2022-10-03T175816.949 (1).pdf",
      ],
      areaEquipo: [["área 1"], ["área 2"], ["área 1"]],
      responsableEquipo: [
        ["Responsable Área 1"],
        ["Responsable Área 2"],
        ["Responsable Área 1"],
      ],
      contencioso: ["contencioso 2"],
      equipo: "",
      autoridad: ["autoridad 1"],
      area: ["área 1"],
      administradorGeneral: ["Admin General 1"],
      administradorCentral: ["Admin Central 2"],
      administrador: ["Administrador 1"],
      conceptos: "<p>drfgdfrhdfhdfbfdb</p>",
      defensa: "<p>fdbdfbfdbfdbd</p>",
      tipoCard: "mal",
      active: false,
    },
    {
      id: 4,
      anio: "2020",
      unidadNegocio: "Banco Azteca",
      siglas: "BAZ",
      nombre: "BAZ 2020",
      monto: "52700",
      representanteLegal: [["Representante 2"], ["Representante 3"]],
      instrumentoPublicoPoder: [
        ["Instrumento Público 1"],
        ["Instrumento Público 2"],
      ],
      instrumentoPublico: [
        "Mancuernas_UX_Service.pdf",
        "Cita - 2022-10-03T175816.949 (1).pdf",
      ],
      areaEquipo: [["área 1"], ["área 2"], ["área 1"]],
      responsableEquipo: [
        ["Responsable Área 1"],
        ["Responsable Área 2"],
        ["Responsable Área 1"],
      ],
      contencioso: ["contencioso 2"],
      equipo: "",
      autoridad: ["autoridad 1"],
      area: ["área 1"],
      administradorGeneral: ["Admin General 1"],
      administradorCentral: ["Admin Central 2"],
      administrador: ["Administrador 1"],
      conceptos: "<p>drfgdfrhdfhdfbfdb</p>",
      defensa: "<p>fdbdfbfdbfdbd</p>",
      tipoCard: "cambios",
      active: false,
    },
    {
      id: 5,
      anio: "2021",
      unidadNegocio: "Banco Azteca",
      siglas: "BAZ",
      nombre: "BAZ 2021",
      monto: "78250",
      representanteLegal: [["Representante 2"], ["Representante 3"]],
      instrumentoPublicoPoder: [
        ["Instrumento Público 1"],
        ["Instrumento Público 2"],
      ],
      instrumentoPublico: [
        "Mancuernas_UX_Service.pdf",
        "Cita - 2022-10-03T175816.949 (1).pdf",
      ],
      areaEquipo: [["área 1"], ["área 2"], ["área 1"]],
      responsableEquipo: [
        ["Responsable Área 1"],
        ["Responsable Área 2"],
        ["Responsable Área 1"],
      ],
      contencioso: ["contencioso 2"],
      equipo: "",
      autoridad: ["autoridad 1"],
      area: ["área 1"],
      administradorGeneral: ["Admin General 1"],
      administradorCentral: ["Admin Central 2"],
      administrador: ["Administrador 1"],
      conceptos: "<p>drfgdfrhdfhdfbfdb</p>",
      defensa: "<p>fdbdfbfdbfdbd</p>",
      tipoCard: "informativo",
      active: false,
    },
    {
      id: 6,
      anio: "2022",
      unidadNegocio: "Banco Azteca",
      siglas: "BAZ",
      nombre: "BAZ 2022",
      monto: "48999",
      representanteLegal: [["Representante 2"], ["Representante 3"]],
      instrumentoPublicoPoder: [
        ["Instrumento Público 1"],
        ["Instrumento Público 2"],
      ],
      instrumentoPublico: [
        "Mancuernas_UX_Service.pdf",
        "Cita - 2022-10-03T175816.949 (1).pdf",
      ],
      areaEquipo: [["área 1"], ["área 2"], ["área 1"]],
      responsableEquipo: [
        ["Responsable Área 1"],
        ["Responsable Área 2"],
        ["Responsable Área 1"],
      ],
      contencioso: ["contencioso 2"],
      equipo: "",
      autoridad: ["autoridad 1"],
      area: ["área 1"],
      administradorGeneral: ["Admin General 1"],
      administradorCentral: ["Admin Central 2"],
      administrador: ["Administrador 1"],
      conceptos: "<p>drfgdfrhdfhdfbfdb</p>",
      defensa: "<p>fdbdfbfdbfdbd</p>",
      tipoCard: "cambios",
      active: false,
    },
  ];

  oficios: any[] = [
    {
      id: 1,
      numOficio: "230/2016 Requerimiento de información",
      fechaNotificacion: "05/09/2022",
      fechaTermino: "20/09/2022",
      estado: "pendiente",
      correo: "ejemplo@algo.copm.mx",
      idAuditoria: 1,
    },
    {
      id: 2,
      numOficio: "221/2016 Requerimiento de información",
      fechaNotificacion: "05/09/2022",
      fechaTermino: "20/09/2022",
      estado: "pendiente",
      correo: "ejemplo@algo.copm.mx",
      idAuditoria: 2,
    },
  ];

  siglas: any[] = [
    {
      id: 1,
      chars: "BAZ",
      idUnidadNegocio: 1,
    },
    {
      id: 2,
      chars: "EKT",
      idUnidadNegocio: 2,
    },
    {
      id: 3,
      chars: "TP",
      idUnidadNegocio: 3,
    },
  ];

  validaCampo(form: FormGroup, value: string) {
    return form.controls[value].invalid && form.controls[value].touched;
  }
}
