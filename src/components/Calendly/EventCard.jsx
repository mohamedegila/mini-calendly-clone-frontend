import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


import styles from './styles.module.css';

const EventCard = () => {


  const {events} = useSelector((state)=>state.app)
  

  // const dispatch = useDispatch()

  // const getData = () =>{
  //   if(events.length==0){
  //     dispatch(getEventData())
  //   }
   
  // }
  
  const handleDelete = (id) =>{
    // dispatch(deleteEventData(id)).then(dispatch(getEventData()))
  }
  // useEffect(()=>{
  //   dispatch(getEventData())
  //   console.log("delete")
  // },[dispatch])
  
  
  console.log('events: ', events);


  return (
    <>
    {
      events.length===0 ? "No Events" :
      events.map((el)=>(
        <div className={styles.card} key={el.id}>
          
        <div className="mb-4">
          <h1 className="text-xl font-medium">
            {el.duration} Meeeting
          </h1>
          <p className="font-normal text-slate-200" >
          {el.duration} One-on-One
          </p>

          <Link to={`/booking_page/${el.id}`} color={"blue.500"}>
            View booking page
          </Link>
          <hr/>
          <flex direction={'row'} mt={2} spacing={4} >
          <button flex={1} fontSize={'sm'} variant={'link'}  color={'blue.500'}>
   Copy Link
          </button>
          <button className="flex"
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              color={"blue.400"}
              variant={"outline"}
              border={"1px solid "}
              borderColor={"blue.500"}
            >
              Share
            </button>
          </flex>
        </div>
      </div>
      ))
     } 
    {/* <Box
   
      maxW={"320px"}
      w={"400px"}
      mt={'2%'}
      boxShadow={"xl"}
      borderTop={"0.5rem solid #8046f3"}
      p={4}
      textAlign={"left"}
    >

    
      <Flex direction={"row"} justifyContent={"space-between"}>
        <Checkbox />
        <Menu>
          <MenuButton
            as={Button}
            variant={"ghost"}
            size={"sm"}
            border={"none"}
            rightIcon={<MdOutlineKeyboardArrowDown />}
          >
            <RiSettings2Fill />
          </MenuButton>

          <MenuList w={"10px"}>
            <MenuItem>
              <Box mr={2}>
                <MdEdit />
              </Box>
              Edit
            </MenuItem>
            <MenuItem>
              <Box mr={2}>
                <BiNote />
              </Box>
              Add Internal Note
            </MenuItem>
            <MenuItem>
              <Box mr={2}>
                <BiCopy />
              </Box>
              Clone
            </MenuItem>
            <MenuItem>
              <Box mr={2}>
                <RiDeleteBin6Fill />
              </Box>
              <button >Delete</button>
              
            </MenuItem>
            <hr />

            <MenuItem>
              On/Off <Switch ml={"6rem"} />
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Box mb={4}>
        <Heading fontSize={"xl"} fontWeight={500}>
          30 Minute Meeeting
        </Heading>
        <Text fontWeight={400} color={"gray.500"} mb={"8px"}>
          30 mins, One-on-One
        </Text>
        <Link to='/booking_page' color={"blue.500"}>
          View booking page
        </Link>
        <hr/>
        <Stack direction={'row'} mt={2} spacing={4} >
        <Button flex={1} fontSize={'sm'} variant={'link'} leftIcon={<BiCopy/>} color={'blue.500'}>
  Copy Link
        </Button>
        <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            color={"blue.400"}
            variant={"outline"}
            border={"1px solid "}
            borderColor={"blue.500"}
          >
            Share
          </Button>
        </Stack>
      </Box>
    </Box> */}
    </>
  );
};

export default EventCard;
