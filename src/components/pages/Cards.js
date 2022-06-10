
            import * as React from 'react';
            import { styled } from '@mui/material/styles';
            import Card from '@mui/material/Card';
            import CardHeader from '@mui/material/CardHeader';
            import CardMedia from '@mui/material/CardMedia';
            import CardContent from '@mui/material/CardContent';
            import CardActions from '@mui/material/CardActions';
            import Collapse from '@mui/material/Collapse';
            import Avatar from '@mui/material/Avatar';
            import IconButton from '@mui/material/IconButton';
            import Typography from '@mui/material/Typography';
            import { red } from '@mui/material/colors';
            import FavoriteIcon from '@mui/icons-material/Favorite';
            import ShareIcon from '@mui/icons-material/Share';
            import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
            import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Description } from '@mui/icons-material';
import { textAlign } from '@mui/system';
            
            const ExpandMore = styled((props) => {
              const { expand, ...other } = props;
              return <IconButton {...other} />;
            })(({ theme, expand }) => ({
              transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
              marginLeft: 'auto',
              transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
              }),
            }));
            
            export default function RecipeReviewCard({img, title, valor, date, nome, letra, description}) {
              const [expanded, setExpanded] = React.useState(false);
            
              const handleExpandClick = () => {
                setExpanded(!expanded);
              };
            
              return (
                <div className='flex' style={{display:'flex', flexWrap:'wrap', marginTop:'10px'}}>
                <Card sx={{ maxWidth: 345 }} style={{ marginLeft:'200px', background:'#696969', textAlign:'center', position:'static'}} >
                  <CardHeader style={{color:'#23232e'}}
                    avatar={
                      <Avatar aria-label="recipe" style={{background:'antiquewhite', color:'#23232e', position:'static'}}>
                        <p>{letra}</p>
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings" style={{color:'antiquewhite', position:'static'}}>
                        <MoreVertIcon style={{color:'antiquewhite'}}/>
                      </IconButton>
                    }
                    title={title}
                    subheader={date}
                  />
                  <CardMedia
                    component="img"
                    height="305"
                    src={img}
                    alt={nome}
                  />
                  <CardContent>
                    <Typography variant="body2" color="antiquewhite" style={{textAlign:'center', fontSize:'20px'}}>
                      {nome}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" style={{color:'antiquewhite', position:'static'}}>
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" style={{color:'antiquewhite', position:'static'}}>
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                      style={{position:'static'}}
                    >
                      <ExpandMoreIcon style={{color:'antiquewhite', position:'static'}}/>
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph style={{color:'antiquewhite', fontSize:'16px'}}>{description}</Typography>
                      <Typography paragraph style={{color:'antiquewhite', float:'left'}}>
                        <h6 style={{float:'left'}}>Preço:{valor}</h6>
                        <br />
                        <h6 style={{float:'left'}}>Contactos: 921221130</h6>
                        <button className='form-control btn btn-primary' style={{background:'antiquewhite'}}><a href="https://wa.me/921221130" class="whatsapp_float" target="_blank" rel="noopener noreferrer"><i className='fab fa-whatsapp' style={{color:'#00FFFF', fontSize:'30px', marginLeft:'2%', }}Whatsapp></i></a></button>
                      </Typography>
                      
                    </CardContent>
                  </Collapse>
                </Card>
                
                </div>
              );
            }