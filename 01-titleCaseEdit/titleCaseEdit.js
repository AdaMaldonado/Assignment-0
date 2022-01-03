function titleCaseEdit(title) {
  // Insert code here;
  let splitTitle = title.split(' ');
  for (let i = 0; i < splitTitle.length; i++) {
    splitTitle[i] = splitTitle[i].charAt(0).toUpperCase() + splitTitle[i].substr(1);
  }
  return splitTitle.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;