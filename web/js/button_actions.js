document.getElementById("reconBtn").addEventListener("click", function createExcel(){
    window.alert("Report one is being generated.");
    eel.create_excel_file();
})

document.getElementById("brokerBtn").addEventListener("click", function createBrokerFile(){
    window.alert("Report two is being generated.");
    eel.create_broker_file();
})

document.getElementById("sepActBtn").addEventListener("click", function createSepActFile(){
    window.alert("Report three is being generated.");
    eel.create_excel_file();
})

/*document.getElementById("sepActBtn").addEventListener("click", function () {
    window.alert("The Recon Excel file is being generated.");
    eel.print_something();
    $.ajax({
        type: "POST",
        url: "C:/Users/Ricardo/Documents/Python_Programming/EelApplication/excelTest.py"
    });
})*/
