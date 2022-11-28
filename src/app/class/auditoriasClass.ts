export enum relevanciaAlerta {
  tituloInformativo = "Titulo Informativo",
  importante = "Importante",
  urgente = "Urgente",
}

export class UnidadNegocio {
  id;
  nombre;
  rfc;
  siglas;
  constructor(u: any) {
    this.id = u.id || 0;
    this.nombre = u.nombre || "";
    this.rfc = u.rfc || "";
    this.siglas = u.siglas || "";
  }
}

export class Representante {
  id: number;
  nombre: string;
  apellidoPat: string;
  apellidoMat: string;
  nombreArea: string;
  constructor(r: any) {
    this.id = r.id || 0;
    this.nombre = r.nombre || "";
    this.apellidoPat = r.apellidoPat || "";
    this.apellidoMat = r.apellidoMat || "";
    this.nombreArea = r.nombreArea || "";
  }
}

export class Area {
  id: number;
  areaResponsable: string;
  grupoCorreo: string;
  responsableArea: string;
  constructor(r: any) {
    this.id = r.id || 0;
    this.areaResponsable = r.areaResponsable || "";
    this.grupoCorreo = r.grupoCorreo || "";
    this.responsableArea = r.responsableArea || "";
  }
}

export class Oficio {
  id;
  numOficio;
  fechaNotificacion;
  fechaTermino;
  estado;
  correo;
  idAuditoria;
  constructor(o: any) {
    this.id = o.id || 0;
    this.numOficio = o.numOficio || 0;
    this.fechaNotificacion = o.fechaNotificacion || "";
    this.fechaTermino = o.fechaTermino || "";
    this.estado = o.estado || "";
    this.correo = o.correo || "";
    this.idAuditoria = o.idAuditoria || 0;
  }
}

export class Auditoria {
  id;
  anio;
  unidadNegocio;
  siglas;
  nombre;
  monto;

  representanteLegal;
  instrumentoPublicoPoder;
  instrumentoPublico: string[] = [];

  areaEquipo;
  responsableEquipo;

  contencioso;

  equipo;

  autoridad;
  area;
  administradorGeneral;
  administradorCentral;
  administrador;

  conceptos;
  defensa;
  
  tipoCard;
  active;
  constructor(a: any) {
    this.id = a.id || 0;
    this.anio = a.anio || "";
    this.unidadNegocio = a.unidadNegocio || '';
    this.siglas = a.siglas || "";
    this.nombre = a.nombre || "";
    this.monto = a.monto || "";

    this.representanteLegal = a.representanteLegal || [];
    this.instrumentoPublicoPoder = a.instrumentoPublicoPoder || [];
    this.instrumentoPublico = a.instrumentoPublico || [];

    this.areaEquipo = a.areaEquipo || [];
    this.responsableEquipo = a.responsableEquipo || [];

    this.contencioso = a.contencioso || "";

    this.equipo = a.equipo || "";

    this.autoridad = a.autoridad || [];
    this.area = a.area || [];
    this.administradorGeneral = a.administradorGeneral || [];
    this.administradorCentral = a.administradorCentral || [];
    this.administrador = a.administrador || [];
    
    this.conceptos = a.conceptos || "";
    this.defensa = a.defensa || "";

    this.tipoCard = a.tipoCard || "cambios";
    this.active = a.active || false;
  }
}

export class Etapa {
  tipoNotificacion;
  existeMensaje;
  fechaMensaje;
  fechaNotifacion;
  tipoArchivo;
  notificacionTipo;
  fechaTermino;
  numeroOficio;
  cumpleLey;
  comentario;
  constructor(e: any) {
    this.tipoNotificacion = e.tipoNotificacion || "";
    this.existeMensaje = e.existeMensaje || "";
    this.fechaMensaje = e.fechaMensaje || "";
    this.fechaNotifacion = e.fechaNotifacion || "";
    this.tipoArchivo = e.tipoArchivo || "";
    this.notificacionTipo = e.notificacionTipo || "";
    this.fechaTermino = e.fechaTermino || "";
    this.numeroOficio = e.numeroOficio || "";
    this.cumpleLey = e.cumpleLey || "";
    this.comentario = e.comentario || "";
  }
}

export class Requirement {
  id;
  partida;
  typeRequestDocumental;
  typeRequestDescriptive;
  acredita;
  description;
  dateDelivery;
  documentsType: TypeDocument[] = [];
  areaResponsible;
  responsible;
  email;
  state;
  constructor(r: any) {
    this.id = r.id || 0;
    this.description = r.description || "";
    this.partida = r.partida || "";
    this.documentsType = r.documentsType  || [];
    this.typeRequestDocumental = r.typeRequestDocumental  || false;
    this.typeRequestDescriptive = r.typeRequestDescriptive  || false;
    this.areaResponsible = r.areaResponsible  || "";
    this.responsible = r.responsible  || "";
    this.email = r.email || "";
    this.dateDelivery = r.dateDelivery  || "";
    this.acredita = r.acredita  || "";
    this.state = r.state || "Pendiente de revisión";
  }
}

export class Responsible {
  id;
  name;
  constructor(r: any) {
    this.id = r.id || 0;
    this.name = r.name || "";
  }
}

export class TypeRequeriment {
  id;
  name;
  constructor(t: any) {
    this.id = t.id || 0;
    this.name = t.name || "";
  }
}

export class TypeDocument{
  id;
  typeDocument;
  description;
  areaResponsible;
  responsible;
  email;
  idRequirement;
  constructor(typeDocument:any){
    this.id = typeDocument.id || 0;
    this.typeDocument = typeDocument.typeDocument || '';
    this.description = typeDocument.description || '';
    this.areaResponsible = typeDocument.areaResponsible || '';
    this.responsible = typeDocument.responsible || '';
    this.email = typeDocument.email || '';
    this.idRequirement = typeDocument.idRequirement || 0;
  }
}
