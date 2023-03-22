import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import './announcements.css';
import { Button } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

const Announcements = () => {
  const [data, setData] = useState([]);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editSentBy, setEditSentBy] = useState('');
  const [editTo, setEditTo] = useState('');
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',  
    description: '',
    sentBy: '',
    to: '',
  });
  const [showEdit, setShowEdit] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  const initialData = {
    columns: [
      {
        label: 'Title',
        field: 'title',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Description',
        field: 'description',
        sort: 'asc',
        width: 270,
      },
      {
        label: 'Published Date',
        field: 'date',
        sort: 'asc',
        width: 200,
      },
      {
        label: 'Sent By',
        field: 'senderID',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Receiver',
        field: 'receiverID',
        sort: 'asc',
        width: 150,
      },
      {
        label: '',
        field: 'actions',
        width: 100,
      },
    ],
    rows: data.map((announcement) => ({
      ...announcement,
      senderId: announcement.senderId,
      receiverId: announcement.receiverId,
    })),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8000/api/announcements'
        );

        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const columns = initialData.columns;

  const [showAddForm, setShowAddForm] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAnnouncement({
      ...newAnnouncement,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const pubDate = new Date().toISOString().substring(0, 10);
      const response = await axios.post(
        'http://localhost:8000/api/announcements/create',
        {
          ...newAnnouncement,
          pubDate,
          senderId: newAnnouncement.sentBy,
          receiverId: newAnnouncement.to,
        }
      );
      console.log(response);
      setShowAddForm(false);
      setData([
        ...data,
        {
          
          ...newAnnouncement,
          pubDate,
          senderId: response.data.sender,
          receiverId: response.data.receiver,
        },
        window.location.reload()

      ]);
      setNewAnnouncement({
        title: '',
        description: '',
        sentBy: '',
        to: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (announcement)=> {
    setSelectedAnnouncement(announcement);
    setEditTitle(announcement.title);
    setEditDescription(announcement.description);
    setEditSentBy(announcement.senderId);
    setEditTo(announcement.receiverId);
    setShowEdit(true);
  };
  const handleSave = async (id) =>{
    await axios.put(`http://localhost:8000/api/announcements/edit/${id}`, {
      title: editTitle,
      description: editDescription,
      sentBy: editSentBy,
      to: editTo,
    });
    setEditTitle('');
    setEditDescription('');
    setEditSentBy('');
    setEditTo('');
    window.location.reload();
  };


  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/announcements/delete/${id}`
      );
      console.log(response);
      setData(data.filter((announcement) => announcement.id !== id));
    } catch (error) {
      console.log(error);
    }
   
  };
  
  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this announcement?')) {
      handleDelete(id);
    }
  };

  function handleCancle(){
    setShowEdit(false);
    setShowAddForm(false);
    setShowDeleteForm(false);

  }
 



  const actions = (announcement) => (
    <div className='announcement_actions-buttons'>
      <PencilSquare size={24} onClick={() => handleEdit(announcement)} style={{cursor: 'pointer'}} className='announcement_actions-edit'/>
      <Trash size={24} onClick={() => handleDeleteClick(announcement.id)} style={{cursor: 'pointer'}} className='announcement_actions-delete'/>
    </div>
  );
  
  
  

  initialData.rows = data.map((announcement) => ({
    ...announcement,
    senderId: announcement.senderId,
    receiverId: announcement.receiverId,
    date: new Date(announcement.created_at).toLocaleDateString(),
    actions: actions(announcement),
  }));

  return (
    <div className="table-container">
      <div className='announcement_title'>
        Announcements
      </div>
      <div className="add-announcement">
        <button onClick={() => setShowAddForm(!showAddForm)} className="announcements_add-button">
          + ADD
        </button>
        {showAddForm && (
          <form onSubmit={handleSubmit} className="frm-edit">
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={newAnnouncement.title}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={newAnnouncement.description}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Sent By:
              <input
                type="text"
                name="sentBy"
                value={newAnnouncement.sentBy}
                onChange={handleInputChange}
              />
            </label>
            <label>
              To:
              <input
                type="text"
                name="to"
                value={newAnnouncement.to}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">Submit</button>
            <button type='button' onClick={handleCancle}>Cancel</button>

          </form>
        )}

       {showEdit && (<form className="frm-edit" onSubmit={(e) => { e.preventDefault(); selectedAnnouncement && handleSave(selectedAnnouncement.id); }}>
  <label>
    Title:
    <input
      type="text"
      name="title"
      value={editTitle}
      onChange={(e) => setEditTitle(e.target.value)}
    />
  </label>
  <label>
    Description:
    <input
      type="text"
      name="description"
      value={editDescription}
      onChange={(e) => setEditDescription(e.target.value)}
    />
  </label>
  <label>
    Sent By:
    <input
      type="text"
      name="sentBy"
      value={editSentBy}
      onChange={(e) => setEditSentBy(e.target.value)}
    />
  </label>
  <label>
    To:
    <input
      type="text"
      name="to"
      value={editTo}
      onChange={(e) => setEditTo(e.target.value)}
    />
  </label>
  <button type="submit">edit</button>
  <button type='button' onClick={handleCancle}>Cancel</button>
</form>)}
      </div>
      <MDBDataTable
        striped
        bordered
        hover
        data={initialData}
        noBottomColumns
        noRecordsFoundLabel="No records found"
        paging={false}
      />
    </div>
  );
};

export default Announcements;