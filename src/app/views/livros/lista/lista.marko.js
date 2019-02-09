// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/casadocodigo$1.0.0/src/app/views/livros/lista/lista.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><style>\r\n                table, th, td {\r\n                border: 1px solid black;\r\n                border-collapse: collapse;\r\n                }\r\n                th, td {\r\n                padding: 5px;\r\n                text-align: left;\r\n                }\r\n            </style> </head><body>");

  component_globals_tag({}, out);

  out.w("<h1> listagem de Livros</h1><table id=\"livros\"><tr><th>ID</th><th>Título</th><th>Preço</th> <th>Editar</th> <th>Remover</th> </tr>");

  var for__13 = 0;

  marko_forEach(data.livros, function(livro) {
    var keyscope__14 = "[" + ((for__13++) + "]");

    out.w("<tr id=\"livro_$(livro.id)\"><td>" +
      marko_escapeXml(livro.id) +
      "</td><td>" +
      marko_escapeXml(livro.titulo) +
      "</td><td>R$ " +
      marko_escapeXml(livro.preco) +
      "</td><td><a href=\"/livros/form/" +
      marko_escapeXmlAttr(livro.id) +
      "\">Editar</a></td><td><a href=\"#\" data-ref=\"" +
      marko_escapeXmlAttr(livro.id) +
      "\" data-type=\"remocao\">Remover</a></td></tr>");
  });

  out.w("</table><script src=\"estatico/js/remove-livro.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "24");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/casadocodigo$1.0.0/src/app/views/livros/lista/lista.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
