
export function Facts() {
 const carryTime = 12

    return (
       <div class="container">
         <p>A llama can carry up to 200 pounds for up to 12 hours, but for long durations that load would be {(carryTime > 12) ? "not too heavy." : "too heavy."}</p>
        
</div>
    )
}