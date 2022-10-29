// method to delete a post from DOM
let allocate = function () {
  let allocateForm = $('#allocate-form');
  //allocateForm.body.res = 1;
  allocateForm.submit(function (e) {
    e.preventDefault();
    alert('ok');
    $.ajax({
      type: 'post',
      url: '/interviews/allocate',
      data: allocateForm.serialize(),
      success: function (data) {
        new Noty({
          theme: 'relax',
          text: 'Student  allocated to Interview Successfully',
          type: 'success',
          layout: 'topRight',
          timeout: 1500,
        }).show();
      },
      error: function (error) {
        console.log(error.responseText);
      },
    });
  });
};
