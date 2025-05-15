 import { useForm} from "react-hook-form";
 import "./NewCardForm.css";
 export function NewCardForm(props) {
    const {addArtistFn} = props;
    const { register, handleSubmit, formState: {errors}, reset } =useForm();
    function handleSubmitCard(data) {
        addArtistFn(data);
        reset();
    }
    return (
    <div className="form-wrapper">
        <h4>Add your Favorite Alt Artist!</h4>
    <form onSubmit={handleSubmit(handleSubmitCard)}> 
      <div className="form-group">
        <label htmlFor= "artistName">Artist's Name</label>
        <input id="artistName" {...register("artist", { required: true})} />
        </div>
        <div className="form-group">
          <label htmlFor="artistImage">Image</label>
          <input {...register("image", {required: true})} />
          {errors.image && (<p className="error">An image is required</p>)}
        </div>
        <div className="form-group">
          <p>Artist Colors</p>
          <label><input value="teal" type="checkbox" {...register("colors")} /> Teal</label>
          <label><input value="orange" type="checkbox" {...register("colors")} /> Orange</label>
          <label><input value="blueviolet" type="checkbox" {...register("colors")} /> Blue Violet</label>
          <label><input value="magenta" type="checkbox" {...register("colors")}/>Magenta</label>
          <label><input value="white" type="checkbox" {...register("colors")}/>White</label>
        </div>
        <div className="form-group">
          <label htmlFor="activeYears">Years Active</label><textarea id="activeYears" {...register("yearsActive")}/>
        </div>
        <div className="form-group">
          <label htmlFor="genreAlternative">Alternative Genre</label><textarea id="genreAlternative" {...register("alternativeGenre")}/>
        </div>
         <div className="form-group">
          <label htmlFor="notableAlbum">Most Notable Album</label><textarea id="notableAlbum" {...register("mostNotableAlbum")}/>
        </div>
         <div className="form-group">
          <label htmlFor="aboutArtist">About the Artist</label><textarea id="aboutArtist" {...register("aboutTheArtist")}/>
          </div>
        <button type="submit">Add Artist</button>
    
    </form>
    </div>
   

    )
 }
  
   