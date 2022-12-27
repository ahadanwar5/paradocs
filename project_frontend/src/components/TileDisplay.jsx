import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import '../styles/tileDisplay.css'

export default function MultiActionAreaCard() {
  return (
    <div className='main-div'>

      <Typography gutterBottom variant="h4" component="div">
                  How are you feeling today?
      </Typography>

      <div className='sample-div'> 

        <div>
          <Card sx={{ maxWidth: 950, backgroundColor: '#FAF9F6'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="images/tileDisplay/joint-pain.png" //Change
                alt="Joint Pain"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stuck with Joint Pain?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Shop pain medications now to relieve your symptoms.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div>
          <Card sx={{ maxWidth: 345, backgroundColor: '#FAF9F6' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="images/tileDisplay/cough.png" //Chainge
                alt="Cough"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Got a Cough?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Relieve your cough with our range of cough medicines
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div>
          <Card sx={{ maxWidth: 345, backgroundColor: '#FAF9F6' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="images/tileDisplay/pregnant.jpg" //Change
                alt="Pregnant"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Are you Pregnant?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Shop vital care items for you and your baby.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      
      </div>

      <div className='sample-div'>
        
        <div>
          <Card sx={{ maxWidth: 350, backgroundColor: '#FAF9F6'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="images/tileDisplay/diabetes.png" //Change
                alt="Diabetes"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Are you Diabetic?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Shop pain medications now to relieve your symptoms.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div>
          <Card sx={{ maxWidth: 350, backgroundColor: '#FAF9F6'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="images/tileDisplay/joint-pain.png" //Change
                alt="Joint Pain"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stuck with Joint Pain?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Shop pain medications now to relieve your symptoms.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div>
          <Card sx={{ maxWidth: 950, backgroundColor: '#FAF9F6'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                width="300"
                image="images/tileDisplay/joint-pain.png" //Change
                alt="Joint Pain"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stuck with Joint Pain?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Shop pain medications now to relieve your symptoms.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

      </div>

    </div>
  );
}
