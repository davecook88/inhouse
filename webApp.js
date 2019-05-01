function doGet(e) {
  return HtmlService
      .createTemplateFromFile('landing')
      .evaluate();
}
