import React, {useState } from 'react'
import { nanoid } from 'nanoid';
function MovieList() {
   

           const movies =[
            { id: 1,
              title: "film1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
            posterURL: "https://www.youtube.com/",
            rating: 2.3,
          },
        { id: 2,
            title: "film2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
            posterURL: "https://www.youtube.com/",
            rating: 2.4,
        },
        { id: 3,
            title: "film3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
            posterURL: "https://www.youtube.com/",
            rating: 5.3,
        },
        { id: 4,
          title: "yout",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
          posterURL: "https://www.youtube.com/",
          rating: 5.3,
        },
        { id: 5,
          title: "Movie12",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
          posterURL: "https://www.youtube.com/",
          rating: 6.3,
        }
    ];
    const [foundUsers, setFoundUsers] = useState(movies);
   
    const [addFormData, setAddFormData] = useState({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
    const handleAddFormChange = (event) => {
      event.preventDefault();
    
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
    
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
    
      setAddFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
      event.preventDefault();
    
      const newContact = {
       id:nanoid(),
        title: addFormData.title,
        description: addFormData.description,
        posterURL: addFormData.posterURL,
        rating: addFormData.rating,
      };
   
      const newContacts = [...foundUsers, newContact];
      setFoundUsers(newContacts);
    };
     const [title, setTitle] = useState('');

  // the search result
 
 
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = movies.filter((user) => {
        return user.title.toLowerCase().includes(keyword.toLowerCase());

        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(movies);
      // If the text field is empty, show all users
    }

    setTitle(keyword);
  };
    return (
        <div className = "container">
            
            <h1 className = "text-center titre1"> Movies List</h1>
            <div className="App">
  
            <div className="container">
              <div className="center">
      <input
        type="search"
        value={title}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />
      </div>
      
  </div>
  {foundUsers && foundUsers.length > 0 ? (
                        foundUsers.map((user) => (
  <div className='container '>
        <div className="row">
            
                <div className="card " >
        
                    <div className="card-Body">
                  
                      <h1 className="card-Text " >{user.title}</h1>
          
                    
                      <p className="card-Text" > {user.description }</p>
                      <p className="card-Text" >{user.posterURL }</p>
                      <p className="card-Text" > {user.rating} </p>
                  
        
                    </div>
                 
            </div>
           
        </div>
        
        </div> 
                    
                  
                           
                              

                        ))
                        ) : (
                            <h1>No results found!</h1>
                           
     ) }
              
  </div>
          
        
    <h2>Add a Movie</h2>
    <form  onSubmit={handleAddFormSubmit}>
      <input
        type="text"
        name="title"
        required="required"
        placeholder="Enter a title..."
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="description"
        required="required"
        placeholder="Enter an description..."
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="posterURL"
        required="required"
        placeholder="Enter an URL..."
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="rating"
        required="required"
        placeholder="Enter a rating..."
        onChange={handleAddFormChange}
      />
      <button type="submit">Add</button>
    </form>
  </div>
        
    )
};

export default MovieList