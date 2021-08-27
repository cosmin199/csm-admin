import './userList.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons';
import { userRows} from '../../dummydata'
import { Link } from 'react-router-dom'
import { useState } from 'react';


const UserList = () => {
    const [data, setData] = useState(userRows)

    const handleDelete = (id)=> {
        setData(data.filter(item=>item.id !== id))
    }
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User',
          width: 200,
          renderCell: (params)=> {
              return (
                  <div className="userListUser">
                      <img className="userListImg" src={params.row.avatar} alt="" />
                      {params.row.username}
                  </div>
              )
          }
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200
          
        },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 120
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            type: 'number',
            width: 160
           
          },
          {
              field: "action",
              headerName: "Action",
              width: 150,
              renderCell: (params)=> {
                  return(
                      <>
                      <Link to={"/user/"+params.row.id}>
                        <button className="userListEdit">edit</button>
                      </Link>
                      <DeleteOutline 
                        className="userListDelete"
                        onClick={()=> handleDelete(params.row.id)} />
                      </>
                  )
              }
          }
        
      ];
      
      
      

    return (
        <div className="userList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={7} checkboxSelection />
        </div>
    )
}

export default UserList
