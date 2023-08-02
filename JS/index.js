var Sname = document.getElementById("siteName");
var url = document.getElementById("siteUrl");

var sitesArr = [];

document.getElementById("siteName").addEventListener("keydown", function () {
  var name = Sname.value;
  if (name.length < 3) {
    this.classList.add("is-invalid");
  } else {
    this.classList.replace("is-invalid", "is-valid");
  }
});

document.getElementById("siteUrl").addEventListener("keyup", function () {
  var regex =
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/;

  if (regex.test(url.value)) {
    console.log("pkwpodkp");
    this.classList.add("is-invalid");
  } else {
    console.log(".....");
    this.classList.replace("is-invalid", "is-valid");
  }
});

document.getElementById("submitBTN").addEventListener("click", function () {
  var site = {
    siteName: Sname.value,
    siteUrl: url.value,
  };
  var regex =
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/;

  if (regex.test(site.siteUrl) && site.siteName.length < 3) {
    sitesArr.push(site);
    display();
  } else {
    Swal.fire({
      html: `
        <h2>Site Name or Url is not valid</h2><br>
        <h4>Please follow the rules below :</h4>
        <li>Site name must contain at least 3 characters</li>
        <li>Site URL must be a valid one</li>
        `,
    });
  }
});

function display() {
  var table = ``;
  for (var i = 0; i < sitesArr.length; i++) {
    table += `
        <tr>
        <td>${i + 1}</td>
        <td>${sitesArr[i].siteName}</td>
        <td><button onclick="Visit(${i})" class="btn btn-green">Visit</button></td>
        <td><button onclick="Delete(${i})" class="btn btn-danger">Delete</button></td>
        </tr>
        `;
  }

  document.getElementById("table_body").innerHTML = table;
}

function Visit(index) {
  window.open(`${sitesArr[index].siteUrl}`, "_blank");
}
function Delete(index) {
  sitesArr.splice(index, 1);
  display();
}
