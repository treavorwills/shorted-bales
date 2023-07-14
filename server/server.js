app.post('/upload-csv', (req, res) => {
    if (!req.files || !req.files.csvFile) {
      return res.status(400).send('No CSV file uploaded');
    }
  
    const csvFile = req.files.csvFile;
  
    // read csv file
    const fileStream = fs.createReadStream(csvFile.tempFilePath);
  
    // initiate the csv variable
    const csvStream = new CSV();
  
    // parsing options
    const parseOptions = {
      headers: true, 
      delimiter: ',',
    };
  
    // Parse the CSV file
    csvStream.fromStream(fileStream, parseOptions)
      .subscribe((row) => {
        // Process each row of the CSV data
        console.log(row);
      }, (error) => {
        // Handle parsing errors
        console.error('CSV parsing error:', error);
      }, () => {
        // CSV processing is complete
        res.send('CSV file processed successfully');
      });
  });
  