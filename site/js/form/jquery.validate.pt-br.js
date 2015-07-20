/*
 * CSS Grid Document - Form Validate pt-br - version 1.0 - cssgrid.com.br ©
 */

jQuery.extend(jQuery.validator.messages, {
	required: "Este campo é obrigatório.",
	remote: "Por favor, corrija este campo.",
	email: "Por favor, forneça um email válido.",
	url: "Por favor, forneça uma URL válida.",
	date: "Por favor, forneça uma data válida.",
	dateISO: "Por favor, forneça uma data válida (ISO).",
	number: "Por favor, forneça um número válido.",
	digits: "Por favor, insira somente digitos.",
	creditcard: "Por favor, forneça um cartão de crédito válido.",
	equalTo: "Por favor, digite o mesmo valor novamente.",
	accept: "Por favor, forneça um valor com uma extensão válida.",
	maxlength: jQuery.validator.format("Por favor, não digite mais que {0} caracteres."),
	minlength: jQuery.validator.format("Por favor, não digite menos que {0} caracteres."),
	rangelength: jQuery.validator.format("Por favor, insira um valor entre {0} e {1} caracteres."),
	range: jQuery.validator.format("Por favor, insira um valor entre {0} e {1}."),
	max: jQuery.validator.format("Por favor, insira um valor menor ou igual a {0}."),
	min: jQuery.validator.format("Por favor, insira um valor maior ou igual a {0}.")
});