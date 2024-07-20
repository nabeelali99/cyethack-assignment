import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if item details already fetched and stored in session

    const storedItemDetails = sessionStorage.getItem(itemId);
    if (storedItemDetails) {
      setItemDetails(JSON.parse(storedItemDetails));
    } else {
      setIsLoading(true);

      // Fetch item details

      const fetchItemDetails = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const details = {
          id: itemId,
          description: `Details of Item ${itemId}`,
          name: `Item ${itemId}`,
          category: `Category ${itemId}`,
        };
        setItemDetails(details);

        // Store item details in session

        sessionStorage.setItem(itemId, JSON.stringify(details));
        setIsLoading(false);
      };

      fetchItemDetails();
    }
  }, [itemId]);

  if (!itemDetails && !isLoading) {
    return <p>No item details found.</p>;
  }

  return (
    <div>
      <Navbar />
      <h2
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
          fontWeight: "bold",
          fontSize: "24px",
          color: "red",
        }}
      >
        Item Details
      </h2>
      {isLoading ? (
        <p>
          <Skeleton count={5} />
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            gap: "20px",
            flexWrap: "wrap",
            alignItems: "center",
            width: "100%",
            height: "100%",
            marginTop: "20px",
          }}
        >
          <Card sx={{ width: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {itemDetails.id}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={itemDetails ? itemDetails.name : null}
              subheader={itemDetails.category}
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {itemDetails.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
