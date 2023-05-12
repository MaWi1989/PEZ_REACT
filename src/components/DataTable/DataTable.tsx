import React, {useState} from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api'; 
import { useGetData } from '../../custom-hooks'; 
import { PezForm } from '../../components/PezForm';
import { 
    Button,
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle 
} from "@mui/material";
import { getAuth } from 'firebase/auth'



const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    editable: true,
  },
  {
    field: 'series',
    headerName: 'Series',
    width: 200,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    type: 'string',
    width: 300,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 80,
  },
  {
    field: 'value',
    headerName: 'Value',
    type: 'number',
    width: 80,
  },
  {
    field: 'year_introduced',
    headerName: 'Year Introduced',
    type: 'number',
    width: 120,
  },
  {
    field: 'retired',
    headerName: 'Retired?',
    type: 'boolean',
    width: 100,
  },
  {
    field: 'original_package',
    headerName: 'Original Package?',
    type: 'boolean',
    width: 100,
  },
  {
    field: 'random_fact',
    headerName: 'Random Fact',
    type: 'number',
    width: 300,
  },
// to combine values into 1 column:
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
 
];



interface gridData {
  data: {
      id?: string;
  }
}


export const DataTable =  () => {
  const auth = getAuth()
  
    let { pezData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridRowSelectionModel>([])
  
    let handleOpen = () => {
      setOpen(true)
    }
  
    let handleClose = () => {
      setOpen(false)
    }
  
    let deleteData = () => {
      serverCalls.delete(`${gridData[0]}`)
      getData()
    }
  
   
    console.log(gridData) 
    
    const MyAuth = localStorage.getItem('myAuth');

    console.log(MyAuth);


    if (MyAuth === 'true'){
    return (
          <div style={{ height: 400, width: '100%' }}>
            <h2>PEZ In Inventory</h2>
            <DataGrid 
                          rows={pezData} 
                          columns={columns} 
                          pageSize={5} 
                          checkboxSelection 
                          onRowSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
                          {...pezData}  
                      />
  
          <Button onClick={handleOpen}>Update</Button>
          <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
  
            {/*Dialog Pop Up begin */}
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update A PEZ</DialogTitle>
            <DialogContent>
              <DialogContentText>PEZ id: {gridData[0]}</DialogContentText>
                <PezForm id={`${gridData[0]}`}/>
            </DialogContent>
            <DialogActions>
              <Button onClick = {handleClose} color="primary">Cancel</Button>
              <Button onClick={handleClose} color = "primary">Done</Button> 
            </DialogActions>
          </Dialog>
          </div>
        );

   } else { 
    return( 
    <div>
        <h3>Please Sign In to View Your PEZ Collection</h3>
    </div>
)};
}
